import Link from "@/components/Link";
import { Biography } from "@/components/Biography";
import { ResearchProject } from "@/components/ResearchProject";
import { PublicationEntry } from "@/components/PublicationEntry";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ResearchUpdates } from "@/components/ResearchUpdates";
import { Recognition } from "@/components/Recognition";
import { OpenSource } from "@/components/OpenSource";
import { JsonLd } from "@/components/JsonLd";
import { research } from "@/data/research";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, description } from "@/lib/site";
export const metadata = { ...pageMetadata("Kollaikal Rupesh | Independent AI Researcher", description, "/"), title: { absolute: "Kollaikal Rupesh | Independent AI Researcher" } };
export default function Home() { return <><JsonLd value={{ "@context":"https://schema.org", "@type":"Person", name:profile.name, jobTitle:profile.role, url:absoluteUrl("/"), email:profile.email, sameAs:profile.links.filter(l => l.label === "GitHub" || l.label === "LinkedIn").map(l => l.url), knowsAbout:profile.interests, alumniOf:[{ "@type":"CollegeOrUniversity", name:"University of California, Davis" }, { "@type":"CollegeOrUniversity", name:"Saveetha School of Engineering" }] }}/><Biography/>
 <section id="research" className="home-section"><div className="section-heading"><h2>Selected research</h2><Link href="/research/">All research</Link></div><p className="section-intro">Listening, anticipating, and responding—under real computational constraints.</p>{research.map(p => <ResearchProject key={p.slug} project={p}/>)}</section>
 <section id="publications" className="home-section"><div className="section-heading"><h2>Selected publications</h2><Link href="/publications/">All publications</Link></div>{(["preprint","published"] as const).map(kind => { const entries=publications.filter(p=>p.verified && p.kind===kind).slice(0,2); return entries.length ? <div key={kind}><h3 className="eyebrow group-label">{kind === "preprint" ? "Preprints · not peer-reviewed" : "Articles & proceedings"}</h3>{entries.map(p=><PublicationEntry key={p.slug} publication={p}/>)}</div> : null; })}</section>
 <OpenSource/>
 <Recognition/>
 <section id="experience" className="home-section"><div className="section-heading"><h2>Research & experience</h2><Link href="/cv/">Curriculum vitae</Link></div><Experience/></section>
 <section id="education" className="home-section"><h2>Education</h2><Education/></section>
 <ResearchUpdates/>
 <section className="home-section"><h2>A note on research</h2><div className="philosophy mt-6"><p>I am interested in intelligence beyond predictive accuracy: how humans process language incrementally, anticipate interactions, and communicate under uncertainty.</p><p>I believe research should be accessible, reproducible, and open to scrutiny. Open models and documented evaluations make it possible for others to examine, challenge, and build on the work.</p></div><p className="mt-7 text-sm">I welcome conversations about speech, language, and interactive intelligence. <a href="mailto:kollaikalrupesh@gmail.com">Get in touch</a>.</p></section></>; }
