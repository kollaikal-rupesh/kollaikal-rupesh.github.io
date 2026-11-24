import type { ResearchProject } from "./types";
export const mini: ResearchProject = {
  "slug": "turn-1-mini",
  "name": "turn-1-mini",
  "title": "Efficient causal end-of-turn prediction",
  "area": "Causal spoken dialogue",
  "summary": "A 5.3M-parameter, audio-only model for predicting when a speaker has finished. The original v1 release studies strictly causal turn-taking with streaming inference on a single CPU core.",
  "date": "2026",
  "dateLabel": "Preprint · October 30, 2026",
  "status": "Open model · Apache-2.0 · Preprint",
  "question": "Can a compact causal neural model anticipate the completion of a conversational turn using only information available up to the current moment?",
  "methodology": [
    "Two causal convolutions and six transformer layers use ALiBi positions, with attention restricted to 1.2 seconds per layer. Cached state enables 160 ms streaming steps without future acoustic lookahead.",
    "Training distills speech representations and then turn-taking behavior. The model reads audio rather than transcripts; its 0–4 kHz input band targets telephone and conversational speech."
  ],
  "findings": [
    "The original float32 release reports 22.6% false cut-offs at a 300 ms dead-air setting on eot-bench English. Compute time and conversational response latency measure different things.",
    "The 7 MB INT8 ONNX graph changes approximately 0.2% of decisions on development audio. That graph was not evaluated on eot-bench in the archived release; the separately evaluated INT8 weights must not be conflated with it."
  ],
  "limitations": [
    "Results below refer to v1, archived model-card revision e3c8bc7, and the October 2026 preprint. The current repository now documents v2, a 5.4M-parameter multi-party extension with different evaluation and compute settings.",
    "The November 19, 2026 eot-bench v1.1 record reports 39.6% false cut-offs at 300 ms for the pinned v1.2.3 release. It pools general, accented, and short-turn cohorts, unlike the original 400-turn English evaluation above. The populations differ, so these scores are not directly comparable. The eot-bench policy sweep selects operating settings on the same 400 turns it scores. Overlapping uncertainty intervals and the absence of paired comparisons do not establish a significant advantage over other downloadable models.",
    "Audio-only endpointing can misread pauses within spelled entities or unfinished thoughts. No phone, battery, or complete conversational pipeline performance is claimed."
  ],
  "claims": [
    {
      "label": "Parameters",
      "value": "5.3M",
      "detail": "5,262,337 parameters in the original released model.",
      "sourceUrl": "https://huggingface.co/p99lab/turn-1-mini/blob/e3c8bc7/README.md",
      "evaluationDate": null,
      "checkpoint": "turn-1-mini v1 · e3c8bc7",
      "benchmarkVersion": "Model specification",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    },
    {
      "label": "Median compute",
      "value": "1.29 ms",
      "detail": "Per 160 ms step on one Apple M4 Pro CPU core, float32, including low-pass filtering and log-mel features. Reported model compute, not end-to-end response latency.",
      "sourceUrl": "https://www.preprints.org/manuscript/202610.3143",
      "evaluationDate": null,
      "checkpoint": "turn-1-mini v1",
      "benchmarkVersion": "October 30, 2026 preprint · Section 7",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    },
    {
      "label": "False cut-offs",
      "value": "22.6%",
      "detail": "At 300 ms dead air, English validation: 400 turns and 705 mid-turn pauses. Reported 95% interval: 18.8–27.8%.",
      "sourceUrl": "https://huggingface.co/p99lab/turn-1-mini/blob/e3c8bc7/README.md",
      "evaluationDate": null,
      "checkpoint": "turn-1-mini v1 · float32",
      "benchmarkVersion": "eot-bench data ca9d98a · harness 9ee21b5",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    }
  ],
  "sources": [
    {
      "label": "Model & code",
      "url": "https://huggingface.co/p99lab/turn-1-mini"
    },
    {
      "label": "Preprint",
      "url": "https://www.preprints.org/manuscript/202610.3143"
    },
    {
      "label": "Archived v1 model card",
      "url": "https://huggingface.co/p99lab/turn-1-mini/blob/e3c8bc7/README.md"
    },
    {
      "label": "TurnBench system write-up",
      "url": "https://github.com/P99Lab/turn-1-mini"
    },
    {"label": "Current eot-bench record", "url": "https://github.com/livekit/eot-bench/blob/1769c562b5a962b97b110d26ec0ee3cf864cc249/README.md"}
  ]
};
