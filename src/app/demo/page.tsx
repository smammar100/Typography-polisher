"use client"

import { Section } from "@/components/section"
import { BeforeAfter } from "@/components/before-after"

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      <Section>
        <h1 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">Before & After Demo</h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
          Explore all 26 examples across every category. Toggle between before and after states to see exactly what Typography Polisher&nbsp;fixes.
        </p>
      </Section>

      <Section>
        <BeforeAfter fullPage />
      </Section>
    </div>
  )
}
