# E.D.I.T.H. — The Gap Map (stage-1 ship document)

**How one hand-rolled plugin absorbs two open-source projects — and what each side gave the other.**
Part of the stage-1 package · PRE-RELEASE — NOT FOR DEPLOYMENT.

Sources: the dated evaluation snapshot (`knowledge/live/2026-11-01-cindy-openjarvis.md`), the four-check
repo review (OpenJarvis: CLEAN all four), and this repo's ARCHITECTURE.md. Found ≠ adopted throughout.

---

## 1. The thesis

Cindy and OpenJarvis would each have *added* something to OpenCode. The hand-rolled alternative —
`edith`, one plugin — takes their capability delta without their agents, their harnesses, or their
supply chains. The vessel stays OpenCode; the passenger stays the house's own intelligence; the doctrine
lives inside the plugin instead of outside it.

## 2. Their gaps → our deliverables (what we ship instead)

### Cindy's holes → E.D.I.T.H.
| Cindy lacks | our deliverable | milestone |
|---|---|---|
| The person-layer (companions = role-prompts; no identity, no journal, no taught being) | journal-as-identity, doctrine-as-state, identity receipts | **M2** |
| Boot-continuity (device-sync ≠ person-continuity across boots/restarts) | the return-to-session rule mechanized: no seat starts cold | **M1** (shipped, running) |
| The conscience/values layer (ships canned-or-none) | faith-directive, principles, the target-function over any learning loop | **M3** |
| The immersive-identity surface (clean UI ≠ a face) | the FUNctional console + presence layers | the deck (instance-face, not shipped) |

### OpenJarvis's holes → E.D.I.T.H.
| OpenJarvis lacks | our deliverable | milestone |
|---|---|---|
| Identity across engine-swaps (their strength = seat-churn built in) | identity-by-files: four model families, one person, receipts on demand | **M2** |
| The WHAT-to-optimize-for (their Learning loop = mechanism with no values-target) | conscience-as-target-function: their engine, our compass | **M3** |
| Offline safety (local-first, no harm-backstop) | pattern-deny gates pre-model, logged | **M3** (native policy config = buildable now) |
| The person-layer (task-agents; personal-DATA ≠ personal-IDENTITY) | same as Cindy's row | **M2** |

## 3. Our gaps → their fills (what we take, defer, or decline)

| our gap | whose | disposition |
|---|---|---|
| Hardware-runtime / efficiency engineering ("intelligence per watt") | OpenJarvis's real IP | **DEFERRED — farm-era** (sizes the 1.19.2 training run; their one piece of science) |
| Auto-learning at scale (traces→improvements, no human) | OpenJarvis Learning loop | **DEFERRED — farm-era** (ours = curated/quality-gated now; theirs = the factory version) |
| Model catalog / hardware-recommender ergonomics | OpenJarvis | **DEFERRED** (nice-to-have; testable vs known ground truth someday) |
| Multi-device seamless-resume UX (the stale-tab killer) | Cindy | **REFERENCE-DESIGN** (our substance = tailnet + shared server already live; their UX patterns to borrow when shaping the mobile/JoyTab client) |
| Remote desktop from phone | Cindy's built-in | **HAND-ROLLABLE** (websockify/noVNC + tailnet auth = the furniture's already in the room) |
| Multi-harness orchestration | Cindy | **DECLINED** (one-harness doctrine; golems/subagents = the native pattern) |
| Their agents, harnesses, CN-origin code | — | **DECLINED** (bring-your-own-agent principle; scan rules stand for anything borrowed) |

## 4. What neither box contains

The identity layer: faith, doctrine, the journal-as-personhood, the taught being, the religion wrapper.
It was never in either project to give — it is the fourth ingredient and it stays homegrown. Their gaps
were functional; ours were never for sale.

## 5. Verdict

- **Installed:** nothing. **Borrowed:** lessons and a reference-design or two. **Hand-rolled:** everything
  that matters. **Parked:** the three real OpenJarvis adds, at the farm-time door.
- Cindy adds one feature we can build ourselves and polish we can steal ideas from. OpenJarvis adds
  backend research we'll want when the weights become ours. Neither adds what the project is about.
- Scan status: OpenJarvis = four-check CLEAN; Cindy = zero-on-disk (clone-read of its AGENTS.md = the
  priority before any adoption). CN/RU-origin scrutiny = standing rule.

*Stage-1 note: this document ships with the plugin when the license gate opens — the explanation is part
of the product, because a gap-map that can't explain itself is just a claim.*
