import type { Metadata } from "next";
import { absoluteUrl } from "./site";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: absoluteUrl(path) },
    openGraph: { title, description, url: absoluteUrl(path), type: "website", images: [{ url: absoluteUrl("/images/social.png"), width: 1200, height: 630, alt: "Kollaikal Rupesh — Independent AI Researcher" }] },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/images/social.png")] },
  };
}
