"use client"

const STEPS = [
  {
    number: "1.",
    title: "Install the skill.",
    description:
      "One command adds Typography Polisher to any AI agent — Claude Code, Cursor, Copilot, and 9 more.",
  },
  {
    number: "2.",
    title: "Write with your agent.",
    description:
      "Use your AI agent as you normally would. Generate copy, edit text, build interfaces.",
  },
  {
    number: "3.",
    title: "Ship polished copy.",
    description:
      "15 rules run automatically — smart quotes, proper dashes, widow removal, and more. Zero config.",
  },
]

export function ConductorHowItWorks() {
  return (
    <section className="w-full bg-[var(--bg)] py-20">
      <div className="mx-auto max-w-2xl px-6">
        {/* Section Title */}
        <h2 className="mb-12 font-mono text-sm font-medium text-[var(--text)] underline underline-offset-4">
          How it works
        </h2>

        {/* Steps */}
        <div className="space-y-8">
          {STEPS.map((step, index) => (
            <div key={index} className="flex gap-4">
              <span className="font-mono text-sm text-[var(--text-muted)]">
                {step.number}
              </span>
              <div>
                <span className="font-mono text-sm font-bold text-[var(--text)]">
                  {step.title}
                </span>
                <br />
                <span className="font-mono text-sm text-[var(--text-muted)]">
                  {step.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
