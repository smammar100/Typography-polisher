"use client"

import { Section } from "@/components/section"
import { CopyButton } from "@/components/copy-button"

const installations = [
  {
    agent: "Skills CLI (Recommended)",
    description: "The fastest way to install. Works with any agent that supports SKILL.md\u00A0files.",
    steps: [
      { cmd: "npx skills add smammar100/Typography-polisher", note: "Installs the skill globally for your default agent." },
    ],
  },
  {
    agent: "Claude Code",
    description: "Install directly into Claude Code\u2019s skills\u00A0directory.",
    steps: [
      { cmd: "mkdir -p ~/.claude/skills/typography-polisher", note: "Create the skills directory." },
      { cmd: "curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md -o ~/.claude/skills/typography-polisher/SKILL.md", note: "Download the SKILL.md file." },
    ],
  },
  {
    agent: "Cursor",
    description: "Add as a Cursor rule file for automatic\u00A0application.",
    steps: [
      { cmd: "mkdir -p .cursor/rules", note: "Ensure the rules directory exists." },
      { cmd: "cp SKILL.md .cursor/rules/typography-polisher.mdc", note: "Copy the skill as an .mdc rule file." },
    ],
  },
  {
    agent: "GitHub Copilot",
    description: "Works with Copilot Chat when the SKILL.md is in your project root or referenced in your\u00A0prompt.",
    steps: [
      { cmd: "curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md -o SKILL.md", note: "Download SKILL.md to your project root." },
    ],
  },
  {
    agent: "Windsurf",
    description: "Copy the skill file as a Windsurf rules\u00A0file.",
    steps: [
      { cmd: "cp SKILL.md .windsurfrules", note: "Windsurf reads .windsurfrules automatically." },
    ],
  },
  {
    agent: "Codex CLI",
    description: "Place the SKILL.md in your project root. Codex CLI reads it\u00A0automatically.",
    steps: [
      { cmd: "curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md -o SKILL.md", note: "Download to project root." },
    ],
  },
  {
    agent: "Manual / Other Agents",
    description: "Clone the repository and use the installer script for multi-agent\u00A0setup.",
    steps: [
      { cmd: "git clone https://github.com/smammar100/Typography-polisher.git", note: "Clone the repository." },
      { cmd: "cd Typography-polisher && ./install.sh", note: "Run the interactive installer to configure for your agent." },
    ],
  },
]

export default function InstallPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      <Section>
        <h1 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">Installation</h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
          Typography Polisher works with 12+ AI agents. Choose your agent below for specific install&nbsp;instructions.
        </p>
      </Section>

      {installations.map((inst) => (
        <Section key={inst.agent}>
          <h2 className="text-xl font-bold text-[var(--text)]">{inst.agent}</h2>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{inst.description}</p>
          <div className="mt-4 space-y-3">
            {inst.steps.map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-3 font-mono text-sm">
                  <span className="text-[var(--text-muted)]">$</span>
                  <code className="flex-1 overflow-x-auto text-[var(--text)] whitespace-pre">{step.cmd}</code>
                  <CopyButton text={step.cmd} />
                </div>
                <p className="mt-1.5 text-xs text-[var(--text-muted)]">{step.note}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}
