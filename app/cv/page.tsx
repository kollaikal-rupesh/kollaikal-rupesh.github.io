import { existsSync } from "node:fs";
import path from "node:path";
import { pageMetadata } from "@/lib/metadata";
import { assetUrl } from "@/lib/site";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
export const metadata = pageMetadata("Curriculum vitae", "Education and research experience of Kollaikal Rupesh, independent AI researcher and engineer.", "/cv/");
export default function CVPage() {
  const available = existsSync(path.join(process.cwd(), "public/cv/kollaikal-rupesh-cv.pdf"));
  return <><div className="page-heading"><p className="eyebrow">Background</p><h1>Curriculum vitae</h1><p className="lead">Research and engineering at the intersection of speech, language, and interactive intelligence.</p>{available ? <div className="social-links"><a href={assetUrl("/cv/kollaikal-rupesh-cv.pdf")} target="_blank" rel="noopener noreferrer">View CV (PDF, new tab)</a><a href={assetUrl("/cv/kollaikal-rupesh-cv.pdf")} download>Download CV (PDF)</a></div> : <p className="source-note">For a current academic CV, <a href="mailto:kollaikalrupesh@gmail.com?subject=Academic%20CV%20request">please contact me by email</a>.</p>}</div><section className="home-section"><h2>Research & professional experience</h2><Experience/></section><section className="home-section"><h2>Education</h2><Education/></section></>;
}
