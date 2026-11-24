import Link from "@/components/Link";
import Image from "next/image";
import { profile } from "@/data/profile";
import { assetUrl } from "@/lib/site";
export function Biography() { return <section className="intro" aria-labelledby="name">
  <div className="intro-heading"><div><p className="eyebrow">Speech · Language · Intelligence</p><h1 id="name">{profile.name}</h1><p className="identity">{profile.role}</p><p className="location">{profile.location}</p><nav className="social-links" aria-label="Contact and research profiles">{profile.links.map(link => <a key={link.label} href={link.url}>{link.label}</a>)}<Link href="/cv/">CV</Link></nav></div>{profile.headshot && <Image className="portrait" src={assetUrl(profile.headshot)} width={448} height={560} preload alt="Portrait of Kollaikal Rupesh" />}</div>
  <div className="intro-grid"><div className="biography"><p>I study how intelligent systems process spoken language, anticipate conversational turns, and interact naturally with humans under real-time computational constraints.</p><p>Through <a href="https://www.p99lab.com/">p99lab</a>, I develop and openly release speech and conversational AI models, emphasizing rigorous evaluation, computational efficiency, and accessibility.</p><p>I completed my master’s at the University of California, Davis. My work connects practical speech AI with a broader interest in the computational principles of human communication and cognition.</p></div>
  <aside className="interests" aria-labelledby="interests-title"><h2 id="interests-title" className="eyebrow">Research interests</h2><ul>{profile.interests.map(item => <li key={item}>{item}</li>)}</ul><p className="small-note">Current work in speech and dialogue; a broader interest in computational cognition.</p></aside></div>
  </section>; }
