export type Source = { label: string; url: string };
export type Claim = {
  label: string; value: string; detail: string; sourceUrl: string;
  evaluationDate: string | null; checkpoint: string; benchmarkVersion: string;
  verificationStatus: "verified" | "unverified"; verifiedAt: string;
};
export type ResearchProject = {
  slug: string; name: string; title: string; area: string; summary: string;
  date: string; dateLabel: string; status: string; question: string;
  methodology: string[]; findings: string[]; limitations: string[];
  claims: Claim[]; sources: Source[];
};
export type Publication = {
  slug: string; title: string; authors: string[]; year: number; date: string;
  venue: string; citation: string; kind: "preprint" | "published";
  status: string; url: string; doi?: string; codeUrl?: string;
  summary: string; bibtex: string; verified: boolean;
};
