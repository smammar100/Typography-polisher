"use client"

import { ConductorHero } from "@/components/conductor-hero"
import { ConductorHowItWorks } from "@/components/conductor-how-it-works"
import { ConductorFaq } from "@/components/conductor-faq"
import { BeforeAfter } from "@/components/before-after"
import { RuleCard } from "@/components/rule-card"
import { AgentGrid } from "@/components/agent-grid"
import { BrowserTable } from "@/components/browser-table"
import { CopyButton } from "@/components/copy-button"
import { rules } from "@/lib/examples"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const installTabs = [
  {
    id: "skills",
    label: "Skills CLI",
    cmd: "npx skills add smammar100/Typography-polisher",
  },
  {
    id: "claude",
    label: "Claude Code",
    cmd: 'mkdir -p ~/.claude/skills/typography-polisher && curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md -o ~/.claude/skills/typography-polisher/SKILL.md',
  },
  {
    id: "cursor",
    label: "Cursor",
    cmd: "cp SKILL.md .cursor/rules/typography-polisher.mdc",
  },
  {
    id: "windsurf",
    label: "Windsurf",
    cmd: "cp SKILL.md .windsurfrules",
  },
  {
    id: "manual",
    label: "Manual",
    cmd: "git clone https://github.com/smammar100/Typography-polisher.git && cd Typography-polisher && ./install.sh",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <ConductorHero />

      {/* Before & After */}
      <section className="w-full bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-8 font-mono text-sm font-medium text-[var(--text)] underline underline-offset-4">
            See the difference
          </h2>
          <BeforeAfter />
        </div>
      </section>

      {/* How it works */}
      <ConductorHowItWorks />

      {/* 15 Rules */}
      <section className="w-full bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 font-mono text-sm font-medium text-[var(--text)] underline underline-offset-4">
              All 15 rules
            </h2>
            <p className="mb-8 font-mono text-sm text-[var(--text-muted)]">
              Zero configuration. Every rule runs automatically.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rules.map((rule, i) => (
              <RuleCard key={rule.number} index={i} {...rule} />
            ))}
          </div>
        </div>
      </section>

      {/* Agent Compatibility */}
      <section className="w-full bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AgentGrid />
        </div>
      </section>

      {/* Install */}
      <section className="w-full bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-2 font-mono text-sm font-medium text-[var(--text)] underline underline-offset-4">
            Get started in 10 seconds
          </h2>
          <p className="mb-8 font-mono text-sm text-[var(--text-muted)]">
            Pick your agent and run one&nbsp;command.
          </p>
          <Tabs defaultValue="skills">
            <TabsList className="h-auto flex-wrap bg-[var(--surface)] border border-[var(--border)]">
              {installTabs.map((t) => (
                <TabsTrigger
                  key={t.id}
                  value={t.id}
                  className="font-mono text-xs data-[state=active]:bg-[var(--accent)]/15 data-[state=active]:text-[var(--accent)]"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {installTabs.map((t) => (
              <TabsContent key={t.id} value={t.id}>
                <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-3 font-mono text-sm">
                  <code className="flex-1 overflow-x-auto text-[var(--text)] whitespace-pre">
                    {t.cmd}
                  </code>
                  <CopyButton text={t.cmd} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Browser Support */}
      <section className="w-full bg-[var(--bg)] py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-2 font-mono text-sm font-medium text-[var(--text)] underline underline-offset-4">
            Browser support
          </h2>
          <p className="mb-8 font-mono text-sm text-[var(--text-muted)]">
            Every character renders&nbsp;everywhere.
          </p>
          <BrowserTable />
        </div>
      </section>

      {/* FAQ + CTA */}
      <ConductorFaq />
    </div>
  )
}
