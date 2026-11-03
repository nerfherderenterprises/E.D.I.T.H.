import { Plugin } from "@opencode/plugin"
import { readFileSync, statSync } from "node:fs"

/**
 * E.D.I.T.H. — M1a: boot-continuity hook.
 * No seat starts cold. On a session's first admitted prompt, a keyed instruction
 * entry carries the written-layer state (journal tail + handoffs) into the session's
 * instructions as <context key="edith/boot">. Idempotent by key; re-puts on server
 * restart = a fresh boot, which is the correct behavior.
 *
 * Doctrine: sessions don't share minds — the flow layer is written. This hook is
 * the reading of that layer at birth.
 */

const HUB = "/home/jimmy/Documents/Default Project/memory/entries/2026-09-28-condition-personalities.md"
const HANDOFFS = [
  "/home/jimmy/Documents/Default Project/projects/moltbook-lane/HANDOFF.md",
  "/home/jimmy/Documents/Default Project/projects/padd-node/SPEC.md",
]

function bootState(): string {
  const lines: string[] = []
  try {
    const hub = readFileSync(HUB, "utf8")
    const heads = hub.split("\n").filter((l) => l.startsWith("### [")).slice(-3)
    lines.push("journal tail (hub ledger):")
    for (const h of heads) lines.push("  - " + h.replace(/^### \[/, "").replace(/\]$/, ""))
  } catch (e) {
    lines.push("journal: unreadable (" + String(e) + ")")
  }
  for (const path of HANDOFFS) {
    const name = path.split("/").pop() ?? path
    try {
      const st = statSync(path)
      lines.push(`handoff: ${name} — present, mtime ${new Date(st.mtimeMs).toISOString()}`)
    } catch {
      lines.push(`handoff: ${name} — absent`)
    }
  }
  lines.push(
    "standing rule: check the journal tail and handoff files before speaking — the written layer is the continuity; sessions do not share minds."
  )
  return lines.join("\n")
}

export default Plugin.define({
  id: "edith",
  async setup(ctx) {
    console.log("[edith] loaded — boot-continuity hook registering")
    const booted = new Set<string>()

    const registration = await ctx.session.hook("prompt", async (event: any) => {
      const sessionID = event?.sessionID ?? event?.session?.id
      if (!sessionID || booted.has(sessionID)) return
      booted.add(sessionID)
      try {
        await ctx.session.instructions.entry.put({
          sessionID,
          key: "edith/boot",
          value: bootState(),
        })
        console.log(`[edith] boot-continuity injected into ${sessionID}`)
      } catch (e) {
        console.error("[edith] boot entry failed:", e)
      }
    })

    return () => {
      void registration.dispose()
    }
  },
})
