"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { InstallCommand } from "./install-command"
import ASCIIText from "./ascii-text"

const agentBadges = [
  "Claude Code",
  "Cursor",
  "Copilot",
  "Codex",
  "Gemini",
  "Windsurf",
  "+8 more",
]

export function ConductorHero() {
  return (
    <section className="relative w-full bg-[var(--bg)] pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Version Badge */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            New in v2.0 — 15 typography rules
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ASCII Art Title */}
        <div className="relative mx-auto mb-8 h-[120px] w-full max-w-3xl sm:h-[160px] md:h-[200px]">
          <ASCIIText
            text="TYPO POLISH"
            enableWaves
            asciiFontSize={8}
            textFontSize={200}
            textColor="#fdf9f3"
            planeBaseHeight={8}
          />
        </div>

        {/* Subtitle */}
        <h1 className="mb-4 text-center font-mono text-2xl font-medium text-[var(--text)] md:text-3xl">
          Fix the typography your AI agents get&nbsp;wrong.
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-center font-mono text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
          15 professional fixes for widows, smart quotes, dashes, hyphens, and
          spacing across every AI agent and browser. One&nbsp;command.
        </p>

        {/* CTA Buttons */}
        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/smammar100/Typography-polisher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-[var(--text)] px-6 py-3 font-mono text-sm text-[var(--bg)] transition-colors hover:opacity-90"
          >
            Install Typography Polisher
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/features"
            className="flex items-center gap-2 rounded-md border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--text)] transition-colors hover:opacity-80"
          >
            See all 15 rules
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Install Command */}
        <div className="mx-auto mb-8 max-w-xl">
          <InstallCommand />
        </div>

        {/* Agent badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {agentBadges.map((a) => (
            <span
              key={a}
              className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
