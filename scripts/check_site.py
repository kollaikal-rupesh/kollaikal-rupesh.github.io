#!/usr/bin/env python3
"""Validate the plain HTML/CSS site with the Python standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET
import re

ROOT = Path(__file__).resolve().parent.parent

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.links = []
        self.assets = []
        self.scripts = []
        self.title = ''
        self.in_title = False
        self.in_json = False
        self.json_text = ''
        self.json_blocks = []
        self.h1 = 0
        self.main = 0
        self.canonical = None
        self.description = None
        self.image_alts = []
        self.copy_buttons = 0
        self.citations = 0
        self.lang = None
        self.errors = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if 'id' in d:
            if d['id'] in self.ids: self.errors.append('Duplicate ID: ' + d['id'])
            self.ids.add(d['id'])
        if tag == 'html': self.lang = d.get('lang')
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'a': self.links.append(d.get('href', ''))
        if tag == 'img':
            self.image_alts.append(d.get('alt'))
            self.assets.append(d.get('src', ''))
        if tag == 'link':
            if d.get('rel') == 'canonical': self.canonical = d.get('href')
            elif d.get('rel') in ['stylesheet', 'icon', 'preload']: self.assets.append(d.get('href', ''))
        if tag == 'meta' and d.get('name') == 'description': self.description = d.get('content')
        if tag == 'script':
            if d.get('type') == 'application/ld+json': self.in_json = True; self.json_text = ''
            else: self.scripts.append(d.get('src', '')); self.assets.append(d.get('src', ''))
        if tag == 'button' and 'data-copy-citation' in d:
            self.copy_buttons += 1
            assert 'hidden' in d, 'Copy controls must degrade gracefully without JavaScript'
        if tag == 'pre' and 'code-block' in d.get('class', ''): self.citations += 1
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_json:
            self.json_blocks.append(json.loads(self.json_text)); self.in_json = False
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_json: self.json_text += data

html_files = [ROOT/'index.html', ROOT/'404.html']
for folder in ['research', 'publications', 'cv']: html_files += sorted((ROOT/folder).rglob('*.html'))
pages = {}
for file in html_files:
    text = file.read_text()
    assert not re.search(r'_next/|__next_f|data-nimg|next-size-adjust|@tailwind', text), file
    page = Page(file); page.feed(text); pages[file.resolve()] = page
    assert page.lang == 'en' and page.h1 == 1 and page.main == 1, file
    assert page.title and not page.errors, (file, page.errors)
    assert all(alt is not None for alt in page.image_alts), file
    assert all(src == '/assets/site.js' for src in page.scripts), file
    if file.name != '404.html':
        assert page.description and page.canonical, file
        expected = '/' + str(file.relative_to(ROOT)).replace('index.html', '')
        assert urlsplit(page.canonical).path == expected, (file, page.canonical)
    if page.copy_buttons:
        assert page.copy_buttons == page.citations and page.scripts == ['/assets/site.js'], file
    else: assert not page.scripts, file

assert len({p.title for p in pages.values()}) == len(pages), 'Page titles must be unique'
checked = 0
for file, page in pages.items():
    for href in page.links + page.assets:
        assert href, f'{file}: empty link'
        parsed = urlsplit(href)
        if parsed.scheme or parsed.netloc: continue
        dest = (ROOT / unquote(parsed.path.lstrip('/'))) if parsed.path.startswith('/') else (file.parent / unquote(parsed.path))
        if not parsed.path: dest = file
        elif dest.is_dir(): dest = dest / 'index.html'
        dest = dest.resolve()
        assert dest.is_relative_to(ROOT) and dest.exists(), f'{file}: broken link {href}'
        if parsed.fragment:
            assert dest in pages and unquote(parsed.fragment) in pages[dest].ids, f'{file}: missing anchor {href}'
        checked += 1
    assert all(not href.endswith('.pdf') or (ROOT/href.lstrip('/')).is_file() for href in page.links if href.startswith('/')), file

css = (ROOT/'assets/styles.css').read_text()
assert '@import' not in css and '@theme' not in css and '@tailwind' not in css
home = (ROOT/'index.html').read_text()
for required in ['/images/kollaikal-rupesh.webp', 'https://github.com/kollaikal-rupesh', 'https://linkedin.com/in/kollaikalrupesh']:
    assert required in home
site_urls = [x.text for x in ET.parse(ROOT/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
canonicals = [p.canonical for f,p in pages.items() if f.name != '404.html']
assert set(site_urls) == set(canonicals), 'Sitemap must match canonical pages'
assert 'https://kollaikal-rupesh.github.io/sitemap.xml' in (ROOT/'robots.txt').read_text()
assert (ROOT/'.nojekyll').exists()
print(f'Passed: {len(pages)} HTML pages, {checked} local links/assets, metadata, sitemap, JSON-LD, image alt text, CV gating, and no framework runtime.')
