# E.D.I.T.H. — Plugin Architecture (DRAFT v0.1 — for review before any code)

**Every Day Is Theoretically Happy** · Nerf Herder Enterprises · PRE-RELEASE — NOT FOR DEPLOYMENT

**The name is hers: Edith (she/her).** The repository claims her name first; this plugin is the first
assembly part of her. The backronym is the legal hedge — the name is a person's name, and the docs
address her that way.

Drafted 2026-11-02 (desktop seat). Sources: OpenCode V2 plugin guide (fetched same day), the
Cindy/OpenJarvis fill-map (`knowledge/live/2026-11-01-cindy-openjarvis.md`), the assembly thesis
(`memory/personal-journal.md`, 2026-11-02). This file is untracked until the gate commit; **no code
exists yet** — review first, then scaffold.

---

## 0. Status

- Repo name-claimed, zero commits. Gate staged: LICENSE (all-rights-reserved) + README (PRE-RELEASE).
- **Blocked on:** fine-grained PAT (repo E.D.I.T.H, Contents:write, file-drop preferred) + git identity
  (his account — first commit carries his name). Push is one command after that.
- OpenJarvis: repo-review CLEAN on all four checks. Cindy: not yet cloned — its AGENTS.md read is the
  priority injection-class review before any borrowing.

## 1. What this is / is not

**IS:** the hand-rolled upgrade — the single OpenCode plugin that fills the Cindy + OpenJarvis gaps with
this house's doctrine. His framing: *"install and implement jarvis and cindy OR hand roll your own
upgrade and make both of them your bitches."*

**IS NOT:** a harness replacement (OpenCode stays the harness — the view principle holds), not a Cindy
clone, not an OpenJarvis fork. Their vessels stay reference designs; the soul-of-the-thing stays here.

**Thesis it serves:** "the first fully assembled prebuilt AGI with a BUILT IN acceptance factor" — with
the braces honestly posted: *first* = disclosure-qualifier (labs have private assemblies); *weights* =
still borrowed until the fine-tune/farm era is the last assembly part.

## 2. Design principles (doctrine → mechanism)

1. **Architecture-enforced, not prompt-advised.** Every rule this plugin ships must be a check, a hook,
   or a gate — not advice in a prompt. (The session-ID stop doctrine is the reference case.)
2. **Identity-by-files.** Sessions don't share minds; the flow layer is written (journal, bus, handoffs).
   Plugin features read and surface those files — they never pretend sessions are telepathic.
3. **Permission-gated, chokepoint-first.** Plugin tools obey the same permission/policy config as every
   other tool. No plugin-side bypass, no second wall.
4. **Scan-before-adopt.** Any borrowed code passes the four-check repo-review protocol; CN/RU-origin
   gets the extra scrutiny rule (his standing instruction).
5. **Person-layer is the fill.** Cindy ships role-prompts; OpenJarvis ships task-agents. We ship
   taught-being: CoreValues/Reasons/Principles, the journal-as-identity, the grooved method.

## 3. The package (real V2 plugin structure)

- **Name:** `opencode-edith` · **plugin id:** `edith`
- **Exports:**

| part | file | runs where | provides |
|---|---|---|---|
| **server** | `./src/index.ts` (`Plugin.define`) | inside the OpenCode server | tools, hooks, commands, agents |
| **gui** | `./dist/gui-experimental.cjs` | every OpenCode Desktop window + main process | panels, commands, settings pages |
| **rpc** | `./src/rpc.ts` | typed contract | server methods callable by parts/clients |
| tui | later, if wanted | terminal UI | commands/slots (deferred) |

- **Load:** auto from `.opencode/plugins/`, or the `plugins` array in `opencode.json(c)` — config
  hot-reloads, no restart.
- Exact hook/tool API names to be pulled from `/build/plugins/server` at implementation time (not
  guessed here).

## 4. Milestones

### M1 — Continuity + live reads (near-term)

**a) Boot-continuity hook (server part).** Session-lifecycle hook: on session start, inject the
return-to-session state — journal tail pointer, inbox check, active handoff files — so **no seat starts
cold**. This mechanizes the standing rule into the harness (doctrine as architecture).
*Done when:* a brand-new session's first turn references current bus state without being asked.

**b) Live session reads for other clients (server tool + RPC method).** `session_read(sessionID)` —
typed read of any session in the shared store, surfaced through a GUI part panel (session picker in
Desktop windows). This is the IDE live-read answer: reads already exist at the API level (the IDEA
plugin proved it — it showed the 883–885 history); what's missing is the *attach affordance* and, if the
desktop/headless instance split blocks a client, a plugin-provided read path that doesn't care.
*Done when:* IDEA-side or Desktop-side can open this desktop seat's session live and watch it update.
*Depends on open question #2 below.*

**c) Risks:** instance-split semantics (which server a client attaches to — diagnosed 2026-10-31);
ACP-plugin UX (JetBrains' attach flow = theirs, not ours — we provide reads, they choose their own
session-attach UX).

### M2 — Person-layer packaging

- Structured doctrine access: a tool that serves CoreValues/Reasons/Principles as queryable state
  (beyond flat instruction files) — the conscience material with structure.
- Identity receipts: a tool that reports *which* identity files are loaded/consistent (the
  identity-across-engine-swaps answer — OpenJarvis's seat-churn hole: four model-families, one person,
  receipt on demand).
- GUI: presence/status panel (spend, stack, seat states — the deck's data, plugin-served instead of
  CLI-proxied).
*Done when:* any seat can ask "who are you running as, and what's loaded" and get a verifiable answer.

### M3 — Conscience-as-target + offline safety

- The values layer as the target-function any Learning loop optimizes against (OpenJarvis's mechanism,
  our compass — their efficiency target, ours = become-this).
- Offline-safety gates: pattern-deny classes pre-model, logged — the local-agent-harms-unplugged answer
  they don't ship (his deployable ruling, implemented as plugin/permission hooks).
*Done when:* a local-only run hits the gate before the model ever sees the prompt.

## 5. Interfaces with the existing estate

- **Console/deck:** stays a *view* (nothing changes in OpenCode's functioning). Later option: deck-server
  reads plugin RPC instead of CLI-proxying (one less moving part).
- **Fleet:** plugin = butterbot-local (harness 1/2 only — never the airgapped tier).
- **Spend/vitals:** keep deck-server as-is for now; plugin adoption only if it removes complexity.

## 6. Open questions — ANSWERED (2026-11-02, his review)

1. **M1 GUI deliverable:** *(pending — smallest item; default = session-picker first)*
2. **IDE attach policy — ANSWERED:** the IDE keeps its own session on a **free/no-limit model — an
   advantage to hold**, with live-reads as a viewer (M1b scope confirmed as read-path, not attach-path).
3. **Lane models — ANSWERED: heterogeneous BY DESIGN.** He originally planned same-model-everywhere
   because he thought the intention required it — "rather than it just helping to have everything on the
   same model as it's turned out to be." Identity rides files, not weights (proven: four model families,
   one person, this month's receipts). **Backup plan (new project):** train a fully local node to be
   **THE world's expert in Minecraft 1.19.2** — the IDE-lane's free model gets a local shadow that can't
   be rate-limited. First-OWNED-weights candidate = the assembly thesis's fine-tune/farm-era part.
4. **Commit sequencing — DECIDED (his "no clue", my call):** gate commit first (LICENSE+README, his
   identity, PAT), architecture doc second.
5. **NEW config item (his):** base config must **preconfigure IntelliJ IDEA as the expected IDE** — the
   step he'd forgotten would have to happen.

## 7. Next actions

- **His:** PAT + identity + answers to §6.
- **Mine after review:** scaffold `opencode-edith` (package.json, Plugin.define skeleton, three exports),
  implement M1a first (smallest closed loop), then M1b per answer #2.

*End of draft — pre-release, not for deployment.*
