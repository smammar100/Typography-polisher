"use client"

import { motion } from "framer-motion"
import { browserSupport } from "@/lib/examples"

export function BrowserTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="overflow-x-auto rounded-lg border border-[var(--border)]"
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
            <th className="px-4 py-3 text-left font-medium text-[var(--text-muted)]">Character</th>
            <th className="px-4 py-3 text-left font-mono font-medium text-[var(--text-muted)]">Unicode</th>
            <th className="px-4 py-3 text-left font-mono font-medium text-[var(--text-muted)]">HTML Entity</th>
            <th className="px-4 py-3 text-left font-medium text-[var(--text-muted)]">Browser Support</th>
          </tr>
        </thead>
        <tbody>
          {browserSupport.map((row, i) => (
            <tr
              key={row.unicode}
              className={i < browserSupport.length - 1 ? "border-b border-[var(--border)]" : ""}
            >
              <td className="px-4 py-2.5 text-[var(--text)]">{row.char}</td>
              <td className="px-4 py-2.5 font-mono text-xs text-[var(--text-muted)]">{row.unicode}</td>
              <td className="px-4 py-2.5 font-mono text-xs text-[var(--accent)]">{row.html}</td>
              <td className="px-4 py-2.5 text-[var(--green)]">
                {row.support} <span className="ml-1">&#10003;</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
