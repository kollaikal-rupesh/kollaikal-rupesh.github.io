import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { research } from "@/data/research";
import { publications } from "@/data/publications";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/research/", "/publications/", "/cv/", ...research.map(p => `/research/${p.slug}/`), ...publications.filter(p => p.verified).map(p => `/publications/${p.slug}/`)].map(path => ({ url: absoluteUrl(path) })); }
