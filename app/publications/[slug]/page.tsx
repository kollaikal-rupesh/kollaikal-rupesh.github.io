import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { publications } from "@/data/publications";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CopyCitation } from "@/components/CopyCitation";
export const dynamicParams = false;
export function generateStaticParams() { return publications.filter(p => p.verified).map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = publications.find(p => p.verified && p.slug === slug); return p ? pageMetadata(p.title, p.summary, `/publications/${slug}/`) : {}; }
export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = publications.find(p => p.verified && p.slug === slug); if (!p) notFound(); return <><JsonLd value={{ "@context": "https://schema.org", "@type": "ScholarlyArticle", headline: p.title, author: p.authors.map(name => ({ "@type": "Person", name })), datePublished: p.date, isPartOf: { "@type": "CreativeWork", name: p.venue }, creativeWorkStatus: p.status, sameAs: p.url, url: absoluteUrl(`/publications/${slug}/`), ...(p.doi ? { identifier: p.doi } : {}) }}/><div className="page-heading"><p className="breadcrumb"><Link href="/publications/">All publications</Link></p><p className="eyebrow">{p.year} · {p.status}</p><h1>{p.title}</h1><p className="mt-6">{p.authors.join(", ")}</p><p className="source-note">{p.venue}<br/>{p.citation}</p><div className="social-links"><a href={p.url}>Read paper</a>{p.codeUrl && <a href={p.codeUrl}>Research repository</a>}</div></div><section className="detail-section prose"><h2>Overview</h2><p>{p.summary}</p></section><section className="detail-section" id="citation"><h2>Citation</h2><CopyCitation text={p.bibtex}/><pre className="code-block"><code>{p.bibtex}</code></pre><p className="source-note">Bibliographic details checked against the original publication record.</p></section></>; }
