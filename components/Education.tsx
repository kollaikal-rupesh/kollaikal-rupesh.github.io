import { education } from "@/data/education";
export function Education() { return <div className="timeline">{education.map(e => <article key={e.institution}><p className="timeline-date">{e.dates}</p><div><h3>{e.institution}</h3><p className="role">{e.degree}</p><p>{e.detail}</p><p>{e.focus}</p></div></article>)}</div>; }
