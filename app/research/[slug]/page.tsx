import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { research } from "@/data/research";
import { pageMetadata } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() { return research.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const p = research.find(p => p.slug === slug); return p ? pageMetadata(`${p.name} — ${p.title}`, p.summary, `/research/${slug}/`) : {}; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params; const p = research.find(p => p.slug === slug); if (!p) notFound(); const claims = p.claims.filter(c => c.verificationStatus === "verified");
 return <><div className="page-heading"><p className="breadcrumb"><Link href="/research/">All research</Link></p><p className="eyebrow">{p.area}</p><h1>{p.name}</h1><p className="lead">{p.title}</p><p className="source-note">{p.dateLabel} · {p.status}</p><div className="social-links">{p.sources.slice(0,2).map(s => <a key={s.url} href={s.url}>{s.label}</a>)}</div></div>
 <section className="detail-section prose"><h2>Research question</h2><p>{p.question}</p><p>{p.summary}</p></section>
 <section className="detail-section prose"><h2>Approach</h2>{p.methodology.map(t => <p key={t}>{t}</p>)}{slug === "turn-1-mini" && <figure className="causal-diagram"><div className="causal-stages"><div><strong>Audio up to now</strong><span>160 ms streaming steps</span></div><div><strong>Causal encoder</strong><span>Past context and cached state</span></div><div><strong>Turn probability</strong><span>One output per 20 ms frame</span></div></div><figcaption>Conceptual processing sequence for v1. Every decision uses only current and past audio; this is an architecture schematic, not a measured waveform.</figcaption></figure>}</section>
 <section className="detail-section"><h2>Findings & evaluation</h2><div className="prose">{p.findings.map(t => <p key={t}>{t}</p>)}</div>{claims.length > 0 && <><div className="metrics">{claims.slice(0,3).map(c => <div className="metric" key={c.label}><strong>{c.value}</strong><span>{c.label}</span></div>)}</div><dl className="claims prose">{claims.map(c => <div key={c.label}><dt>{c.label}: {c.value}</dt><dd>{c.detail}</dd><dd className="source-note">{c.checkpoint} · {c.benchmarkVersion}<br/>{c.evaluationDate ? `${slug === "audrey" ? "Leaderboard snapshot" : "Evaluation"}: ${c.evaluationDate}` : "Exact measurement date not stated in source"} · Source checked {c.verifiedAt} · <a href={c.sourceUrl}>Source</a></dd></div>)}</dl></>}</section>
 <section className="detail-section prose"><h2>Scope & limitations</h2>{p.limitations.map(t => <p key={t}>{t}</p>)}</section>
 <section className="detail-section"><h2>Research materials</h2><ul className="source-list">{p.sources.map(s => <li key={s.url}><a href={s.url}>{s.label}</a></li>)}</ul><p className="source-note">Numerical results are reported by the linked authors or benchmark maintainers. Sources checked November 24, 2026.</p></section></>;
}
