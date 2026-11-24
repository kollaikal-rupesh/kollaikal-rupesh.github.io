export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteOrigin = (process.env.NEXT_PUBLIC_SITE_URL || "https://kollaikal-rupesh.github.io").replace(/\/$/, "");
export function absoluteUrl(path = "/") { return `${siteOrigin}${basePath}${path}`; }
export function assetUrl(path: string) { return `${basePath}${path}`; }
export const description = "Kollaikal Rupesh is an independent AI researcher and engineer in San Francisco working on spoken language modeling, computational linguistics, conversational intelligence, and computational cognition.";
