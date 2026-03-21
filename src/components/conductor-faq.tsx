"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const FAQS = [
  {
    question: "Does this modify my source code directly?",
    answer:
      "No. Typography Polisher is a SKILL.md file that instructs your AI agent to apply typography rules when generating or editing text. Your agent does the work; the skill provides the\u00A0rules.",
  },
  {
    question: "Will it break my code or markup?",
    answer:
      "The rules are designed to be safe. CSS properties, code identifiers, proper nouns, and prefix hyphens are all preserved. The skill only touches prose and\u00A0copy.",
  },
  {
    question: "Which agents are supported?",
    answer:
      "Any agent that reads SKILL.md or .mdc rule files: Claude Code, Cursor, GitHub Copilot, Codex CLI, Windsurf, Gemini CLI, Roo Code, Trae, OpenCode, Antigravity, Kiro CLI, and\u00A0Cline.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. Typography Polisher is free, open source, and MIT\u00A0licensed.",
  },
]

export function ConductorFaq() {
  return (
    <section className="w-full bg-[var(--bg)] py-20">
      <div className="mx-auto max-w-2xl px-6">
        {/* FAQ Section */}
        <h2 className="mb-8 font-mono text-sm font-medium text-[var(--text)] underline underline-offset-4">
          Frequently asked questions
        </h2>

        <div className="mb-16 space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index}>
              <h3 className="mb-1 font-mono text-sm font-bold text-[var(--text)]">
                {faq.question}
              </h3>
              <p className="flex gap-2 font-mono text-sm">
                <span className="text-[var(--text-muted)]">|_</span>
                <span className="text-[var(--text-muted)]">{faq.answer}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="mb-1 font-mono text-sm font-bold text-[var(--text)]">
            Your AI writes straight quotes. Fix&nbsp;it.
          </h3>
          <p className="mb-6 font-mono text-sm text-[var(--text-muted)]">
            One command. Zero config. Every&nbsp;agent.
          </p>
          <a
            href="https://github.com/smammar100/Typography-polisher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--text)] px-6 py-3 font-mono text-sm text-[var(--bg)] transition-colors hover:opacity-90"
          >
            Install Typography Polisher
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
