import type { ResearchProject } from "./types";
import { mini } from "./mini";
const audrey: ResearchProject = {
  "slug": "audrey",
  "name": "Audrey",
  "title": "Multilingual automatic speech recognition",
  "area": "Speech recognition",
  "summary": "Speech recognition across public benchmarks and conversational audio. Audrey 0.7 recorded 4.98% average English WER in the October 26, 2026 Open ASR snapshot.",
  "date": "2026",
  "dateLabel": "Leaderboard snapshot · October 26, 2026",
  "status": "Hosted model · Proprietary weights",
  "question": "How well does a speech recognizer generalize from public evaluation sets to less structured, conversational speech?",
  "methodology": [
    "Audrey 0.7 is documented as a hosted multilingual speech recognizer. Its model card reports evaluation on 11 English test sets, including two private sets, through the Open ASR Leaderboard.",
    "Word error rate (WER) counts substitutions, deletions, and insertions relative to a reference transcript. The reported average summarizes the leaderboard’s evaluation sets; it is not a measured multilingual average."
  ],
  "findings": [
    "The October 26, 2026 snapshot places Audrey 0.7 third among 60 English leaderboard entries, with 4.98% average WER. These results belong to the October served build, not an Audrey-1 checkpoint.",
    "On the leaderboard’s private conversational set, the same card reports 11.85% WER and first place in that historical snapshot."
  ],
  "limitations": [
    "The weights are proprietary and served through an API. This is a documented model release, not an open-weight release.",
    "The model card does not disclose enough detail to describe the architecture, initialization, training recipe, or decoding strategy reliably. No statistical-significance result is claimed here.",
    "The service accepts 30 languages, but the cited leaderboard measures English. Historical rankings do not establish the performance of the current service or other checkpoints."
  ],
  "claims": [
    {
      "label": "Average English WER",
      "value": "4.98%",
      "detail": "Average WER in the reported Open ASR Leaderboard evaluation across 11 test sets.",
      "sourceUrl": "https://huggingface.co/p99lab/audrey-0.7",
      "evaluationDate": "2026-10-26",
      "checkpoint": "Audrey 0.7 · October served build",
      "benchmarkVersion": "Open ASR Leaderboard · English",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    },
    {
      "label": "Historical rank",
      "value": "3 / 60",
      "detail": "Third among 60 English entries in the model-card snapshot. Rankings can change.",
      "sourceUrl": "https://huggingface.co/p99lab/audrey-0.7",
      "evaluationDate": "2026-10-26",
      "checkpoint": "Audrey 0.7 · October served build",
      "benchmarkVersion": "Open ASR Leaderboard · English",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    },
    {
      "label": "Private conversational WER",
      "value": "11.85%",
      "detail": "Reported first place on the private conversational evaluation set in the same snapshot.",
      "sourceUrl": "https://huggingface.co/p99lab/audrey-0.7",
      "evaluationDate": "2026-10-26",
      "checkpoint": "Audrey 0.7 · October served build",
      "benchmarkVersion": "Open ASR · private conversational set",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    }
  ],
  "sources": [
    {
      "label": "Model documentation",
      "url": "https://huggingface.co/p99lab/audrey-0.7"
    },
    {
      "label": "Open ASR Leaderboard",
      "url": "https://huggingface.co/spaces/hf-audio/open_asr_leaderboard"
    }
  ]
};
const turn: ResearchProject = {
  "slug": "turn-1",
  "name": "turn-1",
  "title": "Conversational turn detection",
  "area": "Conversational modeling",
  "summary": "A separate, larger model for distinguishing completed turns from pauses and hesitation. It studies acoustic evidence together with optional context from the agent’s previous utterance.",
  "date": "2026",
  "dateLabel": "Release v1.0.0 · October 2026",
  "status": "Open model · Apache-2.0",
  "question": "How can acoustic evidence and conversational context help distinguish a completed utterance from a pause within an ongoing turn?",
  "methodology": [
    "The released model combines two speech encoders, with 2.0B and 0.8B parameters, and task-specific adaptation. It can condition on the agent’s previous utterance.",
    "Each decision processes the last eight seconds of user audio. This is not turn-1-mini’s incremental causal architecture; model size, runtime, and benchmark results belong to separate releases."
  ],
  "findings": [
    "The current model card reports 10.6% false cut-offs at a 300 ms dead-air setting on eot-bench English, and 553 ms latency at a 5% false-cutoff operating point.",
    "The evaluation uses 400 turns and 705 scored mid-turn pauses. The benchmark’s policy sweep chooses operating settings on the same turns it scores."
  ],
  "limitations": [
    "These are original model-card results checked November 24, 2026. The November 19 eot-bench v1.1 benchmark reports 19.3% false cut-offs at 300 ms across its pooled general, accented, and short-turn cohorts. That expanded population differs from the original 400-turn evaluation above. An exact measurement date is not supplied. They are not attributed to turn-1-mini or its TurnBench system.",
    "The reported intervals overlap those of competing models; without paired comparisons, point estimates alone do not establish statistically significant superiority.",
    "Full-window inference and optional text context carry different computational requirements from the compact streaming model."
  ],
  "claims": [
    {
      "label": "False cut-offs",
      "value": "10.6%",
      "detail": "At 300 ms dead air on eot-bench English. This is the original turn-1 model family, not turn-1-mini.",
      "sourceUrl": "https://huggingface.co/p99lab/turn-1",
      "evaluationDate": null,
      "checkpoint": "turn-1 · v1.0.0 model card",
      "benchmarkVersion": "eot-bench data ca9d98a · harness 9ee21b5",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    },
    {
      "label": "Latency at 5% cut-offs",
      "value": "553 ms",
      "detail": "Benchmark dead-air latency at a 5% false-cutoff operating point; not inference compute time.",
      "sourceUrl": "https://huggingface.co/p99lab/turn-1",
      "evaluationDate": null,
      "checkpoint": "turn-1 · v1.0.0 model card",
      "benchmarkVersion": "eot-bench data ca9d98a · harness 9ee21b5",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-24"
    }
  ],
  "sources": [
    {
      "label": "Model & code",
      "url": "https://huggingface.co/p99lab/turn-1"
    },
    {"label": "Updated eot-bench v1.1 record", "url": "https://github.com/livekit/eot-bench/blob/1769c562b5a962b97b110d26ec0ee3cf864cc249/README.md"}
  ]
};
export const research: ResearchProject[] = [audrey, mini, turn];
