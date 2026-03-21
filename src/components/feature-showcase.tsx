"use client"

import { motion } from "framer-motion"
import {
  Type,
  Quote as QuoteIcon,
  Minus,
  Scissors,
  Space,
  Shield,
} from "lucide-react"

interface FeatureBlock {
  icon: React.ReactNode
  title: string
  description: string
  examples: { before: string; after: string }[]
}

const features: FeatureBlock[] = [
  {
    icon: <QuoteIcon className="h-5 w-5" />,
    title: "Smart Quotes & Punctuation",
    description:
      'Converts straight quotes to curly quotes, fixes apostrophes, and transforms three dots into proper ellipsis characters.',
    examples: [
      { before: '"Hello"', after: '\u201cHello\u201d' },
      { before: "it's", after: "it\u2019s" },
      { before: "...", after: "\u2026" },
    ],
  },
  {
    icon: <Minus className="h-5 w-5" />,
    title: "Dashes & Hyphens",
    description:
      "Normalizes em dashes, en dashes, and hyphens. Removes hyphens from compound words that don\u2019t need them while preserving prefixes.",
    examples: [
      { before: "word -- word", after: "word \u2014 word" },
      { before: "re-design", after: "redesign" },
      { before: "2020-2024", after: "2020\u20132024" },
    ],
  },
  {
    icon: <Type className="h-5 w-5" />,
    title: "Widows & Text Flow",
    description:
      "Eliminates widows by inserting non-breaking spaces before the last word in headings and paragraphs. Your text always looks balanced.",
    examples: [
      {
        before: "The quick brown fox",
        after: "The quick brown\u00A0fox",
      },
    ],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Code-Safe Processing",
    description:
      "Intelligently skips code blocks, CSS properties, URLs, and technical identifiers. Only touches prose and copy\u2014never your code.",
    examples: [
      { before: "font-family: 'Arial'", after: "font-family: 'Arial'" },
    ],
  },
]

function FeatureCard({ feature, index }: { feature: FeatureBlock; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/30"
    >
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)]/20">
        {feature.icon}
      </div>

      {/* Text */}
      <h3 className="mt-4 text-base font-semibold text-[var(--text)]">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
        {feature.description}
      </p>

      {/* Examples */}
      <div className="mt-4 space-y-1.5">
        {feature.examples.map((ex, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-md bg-[var(--code-bg)] px-3 py-2 font-mono text-xs"
          >
            <span className="text-[var(--red)] line-through">{ex.before}</span>
            <span className="text-[var(--text-muted)]">&rarr;</span>
            <span className="text-[var(--green)]">{ex.after}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function FeatureShowcase() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
          Core Capabilities
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[var(--text)] sm:text-3xl">
          Every detail, automatically&nbsp;polished
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
          From smart quotes to widow removal, Typography Polisher handles the
          micro-decisions that separate amateur copy from professional&nbsp;typesetting.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </div>
  )
}
