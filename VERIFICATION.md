# Content verification report

Checked on **24 November 2026**. This report separates original research claims, current benchmark conditions, and missing evidence. Dates below refer to the underlying records, not the day this website was built. Public model cards are author-reported documentation unless an independent evaluator is identified.

## Audrey: preserve checkpoint and evaluation date

- Verified model: **Audrey 0.7**, a proprietary hosted multilingual ASR service. It is not an open-weight model. [Original model card](https://huggingface.co/p99lab/audrey-0.7).
- The card reports the Open ASR English table read on **26 October 2026**: third of 60 systems, **4.98% average WER** across 11 sets, and **11.85% WER** / first place on the private conversational set. Attribute these historical rankings to that snapshot; do not imply permanent rankings.
- [Leaderboard submission #243](https://github.com/huggingface/open_asr_leaderboard/pull/243) was merged on 26 October 2026. Maintainer `ebezzam` posted public-set results on 21 October; that public subset's composite is **4.43%**, not the later 11-set average including private sets. These aggregates must not be interchanged.
- [Audrey-1 submission #265](https://github.com/huggingface/open_asr_leaderboard/pull/265) remains open. It explicitly calls Audrey-1 the successor to Audrey-0.7; the maintainer asked on 4 November to wait for a later evaluation/private split. No Audrey-1 ranking is established by these records.
- Architecture, initialization, adaptation recipe, decoding experiments and statistical-significance results were not available in the inspected model card. Do not invent them. WER can be explained as substitutions, deletions and insertions divided by reference-word count, without implying a significance test was performed.
- [Open ASR Leaderboard](https://huggingface.co/spaces/hf-audio/open_asr_leaderboard) is the live source; the dated model card preserves the historical claim.

## turn-1: distinct server model

[Original model card](https://huggingface.co/p99lab/turn-1) identifies version 1.0.0, October 2026, Apache-2.0 code and weights. It combines estimates from two unchanged third-party speech encoders, with a p99lab prediction head and a separate adapter/head. It consumes the last eight seconds of user audio and optionally the previous agent utterance; it does not consume the user's transcript and is not incremental. The card distinguishes this server model from turn-1-mini.

Its original self-reported English evaluation uses `livekit/eot-bench-data`, `en`, `validation`, data revision `ca9d98a`, harness `9ee21b5`, **400 turns / 705 scored mid-turn pauses**. Results: 10.6% false cutoffs at 300 ms; 4.5% at 600 ms; 553 ms latency at 5% cutoffs; 322 ms at 10%. These are endpointing delays, not computation time. The card provides bootstrap intervals, discloses two candidates were evaluated, and does not claim a significant advantage over competing models. Do not assign turn-1-mini's TurnBench results to this model.

## Original versus current eot-bench

The original 22.6% false-cutoff result for turn-1-mini refers to the original English evaluation, not today's expanded pooled English table. Preserve its version and source:

- [Original mini model card, revision e3c8bc7](https://huggingface.co/p99lab/turn-1-mini/blob/e3c8bc7/README.md).
- [Original paper, 30 October 2026](https://www.preprints.org/manuscript/202610.3143/v1).
- [Current mini card](https://huggingface.co/p99lab/turn-1-mini) describes v2. Do not combine its parameter count or multi-party evaluation with v1's original release figures.

The current official eot-bench README is pinned here to **commit `1769c562b5a962b97b110d26ec0ee3cf864cc249`**, committed 19 November 2026:

[Exact benchmark snapshot](https://github.com/livekit/eot-bench/blob/1769c562b5a962b97b110d26ec0ee3cf864cc249/README.md).

Its **v1.1 English table pools `general`, `accented` and `short_turns` cohorts**. The additions include 800 accented turns and 1,088 short turns. This is a changed evaluation population, so differences from the earlier 400-turn results do not by themselves establish model regression.

| Model | Cutoffs at 300 ms | Cutoffs at 600 ms | Delay at 5% cutoffs | Delay at 10% cutoffs |
| --- | ---: | ---: | ---: | ---: |
| turn-1 | 19.3% | 8.7% | 912 ms | 529 ms |
| turn-1-mini v1.2.3 | 39.6% | 18.7% | 1,169 ms | 862 ms |

The official adapter pins mini to Hugging Face revision `22bcc75c9857d664ede4811cf3dfaa46be7c4376`, explicitly excluding the later v2 model. It pins turn-1 to `41f0273746c893187e687ef5a3e423830afbdd59`. The website should label any table by benchmark version, model version, cohort and source date.

## Publications

### Verified journal record

**Turn Detection in Production Voice AI Agents: A Survey of Approaches and Open Challenges** — Kollaikal Rupesh, *International Journal of Novel Research and Development*, **11(5), e531–e535**, published **20 May 2026**.

- [Publisher record](https://www.ijnrd.org/viewpaperforall.php?paper=IJNRD2605471)
- [Published PDF](https://ijnrd.org/papers/IJNRD2605471.pdf)

The publisher labels this record peer reviewed. A conservative website label is “Journal article”; no venue quality, indexing, impact factor or citation-count claims were independently established. No DOI was established from the record.

### Verified preprint records

**Efficient Causal End-of-Turn Prediction for Real-Time Spoken Dialogue Systems** — sole author Kollaikal Rupesh; Preprints.org; posted **30 October 2026**; version 1; explicitly not peer reviewed.

- [Versioned repository record](https://www.preprints.org/manuscript/202610.3143/v1)
- [DOI](https://doi.org/10.20944/preprints202610.3143.v1)

**Toward Deployment-First Voice Clone Detection: A Lightweight and Robust Evaluation Protocol for Audio Deepfake Defense** — sole author Kollaikal Rupesh; SSRN; 2026; preprint. The indexed primary record says written 16 May and posted 21 May 2026; it also identifies another version posted 2 June. Use the year without asserting that the May version is the latest.

- [Permanent SSRN abstract](https://ssrn.com/abstract=6778759)
- [Indexed primary record / delivery URL](https://papers.ssrn.com/sol3/Delivery.cfm/6778759.pdf?abstractid=6778759&mirid=1&type=2)
- [DOI](https://doi.org/10.2139/ssrn.6778759)

Direct SSRN abstract fetch returned HTTP 403 in this environment; primary indexed text was retrievable. The work proposes an evaluation protocol and design principles; it should not be described as a validated deployed detector with invented performance results.

### AIP: omit pending direct publisher confirmation

The publisher-deposited [Crossref record](https://api.crossref.org/works/10.1063/5.0233047) verifies:

- Exact title: **Evaluate the accurate prediction of text summarization using novel long short term memory algorithm in comparison with random forest**.
- Authors, in order: **Kollaikal Rupesh; S. Christy**.
- *AIP Conference Proceedings*, volume **3193**, article **020217**, year **2024**.
- DOI: [10.1063/5.0233047](https://doi.org/10.1063/5.0233047).
- Conference: *2nd International Interdisciplinary Scientific Conference on Green Energy, Environmental and Renewable Energy, Advanced Materials, and Sustainable Development: ICGRMSD24*.
- [Publisher endpoint](https://pubs.aip.org/aip/acp/article-lookup/doi/10.1063/5.0233047).

The direct publisher endpoint returned HTTP 403. Crossref provides only the publication year; its 12 November 2024 deposit date must not be silently converted into a publication date. Because the brief specifically requires citation details and publication date directly from the publisher, this entry remains omitted until that evidence is supplied.

**Novel Efficient Deep Learning Model for Text Classification**: no matching original publication record was found by exact-title search and Crossref title/author search. Omit it; request a DOI or publisher record before adding it.

## Open-source contributions

GitHub's public API identifies the following authored Pipecat PRs as merged. Each linked PR is direct evidence; no stars/download totals are needed.

| Contribution | PR | Merged (UTC) |
| --- | --- | --- |
| Correct Smart Turn v3 inference at non-16 kHz input rates through high-quality resampling | [#3857](https://github.com/pipecat-ai/pipecat/pull/3857) | 2 March 2026 |
| Automatic service/provider failover on non-fatal service errors | [#3870](https://github.com/pipecat-ai/pipecat/pull/3870) | 10 March 2026 |
| Avoid inserting an existing RTVI processor twice | [#3871](https://github.com/pipecat-ai/pipecat/pull/3871) | 28 February 2026 |
| Remove excessive per-audio-chunk Genesys logging | [#3850](https://github.com/pipecat-ai/pipecat/pull/3850) | 27 February 2026 |
| Stop audio mixer when pipeline is cancelled | [#4245](https://github.com/pipecat-ai/pipecat/pull/4245) | 7 April 2026 |

Important exclusions:

- [Heartbeat timeout/recovery proposal #3882](https://github.com/pipecat-ai/pipecat/pull/3882) is closed **without merging**. It may be linked as a proposal/discussion, not as a shipped contribution.
- [Preemptive turn-stop proposal #3801](https://github.com/pipecat-ai/pipecat/pull/3801) is closed **without merging**.
- [WebSocket recovery PR #3824](https://github.com/pipecat-ai/pipecat/pull/3824) is also closed without merging.
- No verified “59% to 94%” aggregate endpoint-accuracy result was established from the inspected merged PR, so omit that statistic.
- Audrey is proprietary; list it with research projects, not under open-weight model releases. turn-1 and turn-1-mini have Apache-2.0 model/code releases.

## Independent research recognition

Use modest, source-specific descriptions rather than unsupported impact totals:

1. **Independent citation:** Yang Xiao's *VoxTurn: Answering Several Turn-Taking Questions in One Pass with One Model*, submitted to arXiv **15 October 2026**, cites **turn-1 in reference 10** and **turn-1-mini in reference 30** and includes a TurnBench comparison. It is someone else's technical report, not a publication authored by Kollaikal Rupesh. [arXiv record](https://arxiv.org/abs/2610.21150), [full text and references](https://arxiv.org/html/2610.21150v1).
2. **Documented external integration:** Soniqo's documentation provides p99 turn-1-mini usage through its SpeechVAD/Swift API and discusses C++/Android support. This supports “documented integration”; it does not establish deployment scale or research-team adoption. [Integration documentation](https://soniqo.audio/guides/turn-models).

Additional corroboration, not needed on the homepage: The Agentic Data Company's [OpenYap Turn article](https://huggingface.co/blog/TheAgenticDataCompany/openyap-turn), published 18 October 2026, includes turn-1-mini in comparison tables dated 17 October. It shows a different ranking from the earlier first-place claim, reinforcing that rankings require dates. Do not describe a historical first-place claim as the current rank.

## Missing personal evidence and editorial boundaries

- The user's brief is a source for biographical and education text, but the latest academic CV has not been supplied. Role titles and dates cannot yet be checked against it. Mark this as a setup/review requirement rather than inventing a CV.
- No headshot is supplied. Do not generate a substitute portrait.
- No Google Scholar ownership was verified. Crossref exposes an unauthenticated ORCID association for the mini paper; that alone is insufficient to verify account ownership, so omit an ORCID profile link unless confirmed.
- No university affiliation, admission, PhD enrollment, biological-neuroscience research, private personal details, invented citation statistics or undocumented collaborations should appear.

Raw public records used for this verification were retained in the task workspace under `work/research/` (model cards, current benchmark README, Crossref record and GitHub PR metadata). These are development evidence, not website assets.

## Additional mini implementation checks

The archived v1 card confirms 5,262,337 parameters, two causal convolutions, six transformer layers with ALiBi, and no future lookahead. It reports a 7.0 MB INT8 ONNX graph with approximately 0.2% decision changes on development audio; that graph was not run on eot-bench. The separate quantized weights have different benchmark results. The reported 1.29 ms median per 160 ms step is float32 on one Apple M4 Pro core, not full conversational latency.

## Profile URLs and direct HTTP checks

The supplied GitHub account, Hugging Face organization, p99lab website, model cards, benchmark record, three displayed merged PRs, VoxTurn, and Soniqo returned HTTP 200 during the final link check. LinkedIn also returned 200, but automated access can show an interstitial; the exact supplied profile is independently cross-linked from the GitHub account. The Hugging Face link is explicitly labeled as the p99lab organization, not a verified personal account.

SSRN and Preprints.org blocked direct automated fetching (403); original records were accessible through indexed primary-source retrieval. IJNRD's previously verified publisher record returned a server error (500) during the final direct check. These link-access limitations are retained in `reports/external-links.json`; a 403 is not treated as proof that a publication does not exist.
