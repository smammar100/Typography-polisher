"use client"

import { motion } from "framer-motion"
import { Star, ArrowRight, Github } from "lucide-react"
import { InstallCommand } from "./install-command"

export function FooterCta() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--accent)]/3" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-[var(--accent)] opacity-[0.04] blur-[80px]" />

      <div className="relative px-6 py-12 sm:px-10 sm:py-16">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
            Your AI writes straight quotes.
            <br />
            <span className="text-[var(--accent)]">Fix&nbsp;it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            One command. Zero config. Every agent. Start shipping
            professionally typeset copy in&nbsp;seconds.
          </p>
        </motion.div>

        {/* Install */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-lg"
        >
          <InstallCommand />
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/smammar100/Typography-polisher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--text)]"
          >
            <Star className="h-4 w-4" /> Star on GitHub
          </a>
          <a
            href="https://skills.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
          >
            View on skills.sh <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-[var(--border)] px-6 py-4 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text)]">Typography Polisher</span>
            <span>&middot;</span>
            <span>Free &amp; open source</span>
            <span>&middot;</span>
            <span>MIT License</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/smammar100/Typography-polisher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
