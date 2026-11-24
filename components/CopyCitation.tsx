"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
export function CopyCitation({ text }: { text: string }) {
  const [status, setStatus] = useState("");
  async function copy() { try { await navigator.clipboard.writeText(text); setStatus("Copied"); } catch { setStatus("Select and copy the citation below."); } }
  return <div className="copy-control"><button type="button" className="text-button" onClick={copy}>{status === "Copied" ? <Check size={15} aria-hidden="true"/> : <Copy size={15} aria-hidden="true"/>} Copy BibTeX</button><span role="status" className="small-note">{status}</span></div>;
}
