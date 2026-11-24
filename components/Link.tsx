import type { AnchorHTMLAttributes } from "react";
import { basePath } from "@/lib/site";
// Native navigation keeps the static export independent of host-specific RSC rewrites.
export default function Link({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a href={href.startsWith("/") ? `${basePath}${href}` : href} {...props} />;
}
