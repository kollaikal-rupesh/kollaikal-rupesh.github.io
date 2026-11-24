import Link from "@/components/Link";
export function Header() {
  return <header className="site-header shell">
    <Link href="/" className="wordmark" aria-label="Kollaikal Rupesh home">KR<span aria-hidden="true">.</span></Link>
    <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/research/">Research</Link><Link href="/publications/">Publications</Link><Link href="/#experience">Experience</Link><Link href="/cv/">CV</Link></nav>
  </header>;
}
