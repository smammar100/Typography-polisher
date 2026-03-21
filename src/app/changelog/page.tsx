"use client"

import { Section } from "@/components/section"

const versions = [
  {
    version: "v2.1",
    date: "March 2026",
    changes: [
      "Added dimension formatting (10x12 \u2192 10\u00D712)",
      "Improved proper noun detection for hyphenated brand names",
      "Fixed edge case with single character words in widow prevention",
    ],
  },
  {
    version: "v2.0",
    date: "February 2026",
    changes: [
      "Expanded from 8 to 15 typography rules",
      "Added compound hyphen removal with smart preservation",
      "Added CSS text-wrap: balance recommendation",
      "Added font performance rules (WOFF2, font-display: swap)",
      "Added vertical rhythm and 8px grid system guidance",
      "Added number styling (tabular-nums vs proportional-nums)",
      "Added format specific notes for HTML, Markdown, JSX, and .docx",
      "Added browser and encoding compatibility checks",
      "Multi-agent installer script",
      "Support for 14+ AI agents",
    ],
  },
  {
    version: "v1.2",
    date: "January 2026",
    changes: [
      "Added Windsurf and Gemini CLI support",
      "Improved smart quote detection around parentheses",
      "Fixed en dash conversion in date ranges",
    ],
  },
  {
    version: "v1.1",
    date: "December 2025",
    changes: [
      "Added Cursor .mdc rule file support",
      "Improved whitespace cleanup rules",
      "Added UX copy best practices rule",
    ],
  },
  {
    version: "v1.0",
    date: "November 2025",
    changes: [
      "Initial release with 8 core typography rules",
      "Widow and orphan prevention",
      "Smart punctuation conversion",
      "Dash normalization",
      "Whitespace cleanup",
      "Line length recommendations",
      "Text alignment guidance",
      "Accessibility contrast checks",
      "Letter spacing for uppercase text",
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      <Section>
        <h1 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">Changelog</h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
          A history of updates and improvements to Typography&nbsp;Polisher.
        </p>
      </Section>

      <div className="relative border-l border-[var(--border)] pl-8">
        {versions.map((v, i) => (
          <Section key={v.version}>
            <div className={i > 0 ? "mt-10" : ""}>
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-bold text-[var(--text)]">{v.version}</h2>
                <span className="text-sm text-[var(--text-muted)]">{v.date}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {v.changes.map((change, j) => (
                  <li key={j} className="text-sm leading-relaxed text-[var(--text-muted)]">
                    <span className="mr-2 text-[var(--accent)]">&bull;</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        ))}
      </div>
    </div>
  )
}
