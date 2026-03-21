"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { InstallCommand } from "./install-command"

const stats = [
  { value: "15", label: "Typography\nRules" },
  { value: "12+", label: "AI Agents\nSupported" },
  { value: "0", label: "Config\nRequired" },
]

const agentBadges = [
  "Claude Code",
  "Cursor",
  "Copilot",
  "Codex",
  "Gemini",
  "Windsurf",
  "+8 more",
]

function StatDivider() {
  return (
    <div className="flex flex-col gap-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-3 w-[2px] bg-[var(--border)]" />
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[var(--accent)] opacity-[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 top-40 h-[300px] w-[300px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[80px]" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/features#rules"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20"
        >
          <Sparkles className="h-3 w-3" />
          New in v2.0: 15 typography rules <ArrowRight className="h-3 w-3" />
        </Link>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.25rem]"
      >
        Fix the typography
        <br />
        <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--red)] bg-clip-text text-transparent">
          your AI agents
        </span>{" "}
        get&nbsp;wrong.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
      >
        15 professional fixes for widows, smart quotes, dashes, hyphens, and
        spacing across every AI agent and browser. One&nbsp;command.
      </motion.p>

      {/* Install command */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-8 max-w-lg"
      >
        <InstallCommand />
      </motion.div>

      {/* Agent badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-4 flex flex-wrap gap-1.5"
      >
        {agentBadges.map((a) => (
          <span
            key={a}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--text)]"
          >
            {a}
          </span>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-10 flex items-center gap-6"
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-6">
            {index > 0 && <StatDivider />}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold tabular-nums text-[var(--text)] sm:text-4xl">
                {stat.value}
              </span>
              <span className="whitespace-pre-line text-xs leading-tight text-[var(--text-muted)]">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
