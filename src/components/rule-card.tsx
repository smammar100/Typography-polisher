"use client"

import { motion } from "framer-motion"

interface RuleCardProps {
  number: number
  name: string
  description: string
  before: string
  after: string
  index: number
}

export function RuleCard({ number, name, description, before, after, index }: RuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
    >
      <span className="font-mono text-xs text-[var(--text-muted)]">
        Rule {String(number).padStart(2, "0")}
      </span>
      <h3 className="mt-1 text-base font-semibold text-[var(--text)]">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
      <div className="mt-3 flex items-center gap-2 rounded-md bg-[var(--code-bg)] px-3 py-2 font-mono text-xs">
        <span className="text-[var(--red)] line-through">{before}</span>
        <span className="text-[var(--text-muted)]">&rarr;</span>
        <span className="text-[var(--green)]">{after}</span>
      </div>
    </motion.div>
  )
}
