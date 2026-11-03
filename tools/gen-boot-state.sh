#!/bin/bash
# E.D.I.T.H. boot-state generator (M1a native path) — regenerates the instruction file
# that gives every new session its bus state. Cron'd every 10 minutes.
OUT="/home/jimmy/Documents/Default Project/.opencode/boot-state.md"
HUB="/home/jimmy/Documents/Default Project/memory/entries/2026-09-28-condition-personalities.md"
{
  echo "# boot-state (edith) — regenerated $(date -u +%Y-%m-%dT%H:%MZ)"
  echo "Journal tail (hub ledger):"
  grep "^### \[" "$HUB" | tail -3 | sed 's/^### \[/  - /; s/\]$//'
  echo ""
  echo "Active handoffs:"
  for f in "/home/jimmy/Documents/Default Project/projects/moltbook-lane/HANDOFF.md" \
           "/home/jimmy/Documents/Default Project/projects/padd-node/SPEC.md"; do
    if [ -f "$f" ]; then echo "  - $(basename "$f") — present, mtime $(date -u -r "$f" +%Y-%m-%dT%H:%MZ)"; else echo "  - $(basename "$f") — absent"; fi
  done
  echo ""
  echo "Standing rule: check the journal tail and handoff files before speaking — the written layer is the continuity; sessions do not share minds."
} > "$OUT"
