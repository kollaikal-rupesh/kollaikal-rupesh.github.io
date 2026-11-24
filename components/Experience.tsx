import { experience } from "@/data/experience";
export function Experience() { return <div className="timeline">{experience.map(e => <article key={e.organization}><p className="timeline-date">{e.dates}</p><div><h3>{e.organization}</h3><p className="role">{e.role}</p><p>{e.detail}</p></div></article>)}</div>; }
