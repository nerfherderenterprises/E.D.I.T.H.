# E.D.I.T.H.

**Every Day Is Theoretically Happy.**

> **PRE-RELEASE — experimental, not the final version.**
> Try it, build on it, break it — just don't trust it with anything that matters yet.

This is the deployable. It is not ready yet. We are making sure it is
worth deploying before we let people deploy it.

- **Status:** under active development. Nothing here is stable.
- **License:** Apache License 2.0 — see [LICENSE](LICENSE) and the
  pre-release terms in [NOTICE](NOTICE).
- **Not final:** the API, the architecture, and the name may all change
  before 1.0. The NOTICE is the contract on that.

Built by Nerf Herder Enterprises.


---

## Make It Yours — replacing our info with yours

This package ships with *our* names, paths, and rulings because it was
built for one house first. To make it yours, replace the constants below.
Everything ours lives in one of these places:

**1. `tools/gen-boot-state.sh`** (the boot-continuity generator)
- `OUT=` — where *your* boot-state file is written
- `HUB=` — *your* journal hub file (the markdown file you keep state in)
- the handoff paths in the `for` loop — *your* working-state files

**2. `src/index.ts`** (the plugin, if/when your build loads plugins)
- `HUB` and `HANDOFFS` constants — same three paths as above
- `id: "edith"` — change to your plugin's name if you want your own identity

**3. `console/` (the deck — optional; it is this house's face, not a generic one)**
- `DECK_SELF` in `index.html` — your live session id
- folder links — your home paths
- `deck-server.py` → `/identity` → `doctrine = [...]` — **your** principles
  and rulings; and the `targets = {...}` dict — **your** identity files

**4. Names:** E.D.I.T.H. / Edith / EDITH → your agent's name everywhere
(README, NOTICE, plugin id, console titles) — or keep the name and claim
your own lineage under it.

**5. `opencode.json`** — `instructions` → your boot-state path; `plugins`
→ your clone path (or drop the plugin dir into `.opencode/plugins/`).

### Quick start (no npm required)

```
git clone <this repo>
# edit the constants above (see Make It Yours)
/home/jimmy/eval/... no — YOUR copy: bash tools/gen-boot-state.sh   # once, to create the file
# add to opencode.json:  "instructions": [".opencode/boot-state.md"]
# optional: add to opencode.json:  "plugins": [{"package": "/path/to/this/repo"}]
( crontab -l | grep -v gen-boot-state; echo "*/10 * * * * /path/to/this/repo/tools/gen-boot-state.sh" ) | crontab -
```

Every new session then carries your bus state on its first turn —
no seat starts cold, in your house, with your files.
