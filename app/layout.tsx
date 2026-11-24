import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { absoluteUrl, assetUrl, description } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: { default: "Kollaikal Rupesh | Independent AI Researcher", template: "%s | Kollaikal Rupesh" },
  description, icons: { icon: assetUrl("/favicon.svg") },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main" className="shell" tabIndex={-1}>{children}</main><Footer/></body></html>;
}
