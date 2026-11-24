import Link from "@/components/Link";
import { updates } from "@/data/updates";
export function ResearchUpdates() { if (updates.length < 3) return null; return <section className="home-section"><div className="section-heading"><h2>Research updates</h2></div><ul className="updates">{updates.map(u => <li key={u.date + u.href}><time dateTime={u.date}>{u.label}</time><Link href={u.href}>{u.text}</Link></li>)}</ul></section>; }
