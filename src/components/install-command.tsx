"use client"

import { CopyButton } from "./copy-button"

const INSTALL_CMD = "npx skills add smammar100/Typography-polisher"

export function InstallCommand({ className }: { className?: string }) {
  return (
    <div
      className={`group relative flex items-center gap-3 rounded-lg border border-[var(--accent)]/30 bg-[var(--code-bg)] px-4 py-3 font-mono text-sm transition-shadow hover:shadow-[0_0_20px_rgba(201,168,124,0.15)] ${className ?? ""}`}
    >
      <span className="text-[var(--text-muted)]">$</span>
      <code className="flex-1 text-[var(--text)]">{INSTALL_CMD}</code>
      <CopyButton text={INSTALL_CMD} />
    </div>
  )
}
