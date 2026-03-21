"use client"

import { motion } from "framer-motion"
import { agents } from "@/lib/examples"
import Image from "next/image"

const agentLogos: Record<string, string> = {
  "Claude Code": "/claude.png",
  "Cursor": "/cursor.png",
  "GitHub Copilot": "/github.png",
  "Codex CLI": "/codex_cli.png",
  "Windsurf": "/windsurf.png",
  "Gemini CLI": "/gemini_cli.png",
  "Roo Code": "/roo_code.png",
  "Trae": "/trae.png",
  "OpenCode": "/opencode.png",
  "Antigravity": "/antigravity.png",
  "Kiro CLI": "/kiro_cli.png",
  "Cline": "/cline.png",
}

const agentColors: Record<string, string> = {
  "Claude Code": "hsl(25,70%,50%)",
  "Cursor": "hsl(220,80%,55%)",
  "GitHub Copilot": "hsl(210,10%,30%)",
  "Codex CLI": "hsl(150,60%,40%)",
  "Windsurf": "hsl(195,80%,45%)",
  "Gemini CLI": "hsl(220,70%,55%)",
  "Roo Code": "hsl(270,60%,55%)",
  "Trae": "hsl(340,70%,50%)",
  "OpenCode": "hsl(160,60%,40%)",
  "Antigravity": "hsl(280,60%,55%)",
  "Kiro CLI": "hsl(190,70%,45%)",
  "Cline": "hsl(120,50%,40%)",
}

function AgentIcon({ agent, index }: { agent: string; index: number }) {
  const logo = agentLogos[agent]
  const color = agentColors[agent] ?? "hsl(35,50%,63%)"
  const initials = agent.slice(0, 2).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="relative size-20 group"
      title={agent}
    >
      {/* Clipped-corner shape */}
      <svg viewBox="0 0 80 80" className="text-[var(--border)]">
        <path
          fill="currentColor"
          d="M75.43,79.22H4.57c-2.09,0-3.79-1.7-3.79-3.79V12.9c0-1,.4-1.98,1.11-2.68L10.22,1.89c.71-.71,1.68-1.11,2.68-1.11h62.54c2.09,0,3.79,1.7,3.79,3.79v70.87c0,2.09-1.7,3.79-3.79,3.79ZM12.9,1.78c-.73,0-1.45.3-1.97.82L2.59,10.92c-.52.52-.82,1.24-.82,1.97v62.54c0,1.54,1.25,2.79,2.79,2.79h70.87c1.54,0,2.79-1.25,2.79-2.79V4.57c0-1.54-1.25-2.79-2.79-2.79H12.9Z"
        />
      </svg>
      {/* Icon content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        {logo ? (
          <Image
            src={logo}
            alt={agent}
            width={36}
            height={36}
            className="rounded-lg transition-transform group-hover:scale-110"
          />
        ) : (
          <div
            className="flex size-9 items-center justify-center rounded-lg text-white text-sm font-bold transition-transform group-hover:scale-110"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
        )}
        <span className="text-[9px] font-medium text-[var(--text-muted)] leading-none mt-0.5">
          {agent.length > 10 ? agent.split(" ")[0] : agent}
        </span>
      </div>
    </motion.div>
  )
}

export function AgentGrid() {
  return (
    <div className="flex flex-col items-start gap-10 md:flex-row lg:gap-14">
      {/* Text side */}
      <div className="basis-5/12 shrink-0">
        <p className="font-mono text-xs uppercase text-[var(--text-muted)] tracking-wider">
          Compatibility
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[var(--text)] sm:text-3xl">
          Works with every AI coding&nbsp;agent
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          One SKILL.md file powers 12+ agents. No config changes, no per-agent setup. Just install and every agent applies professional typography&nbsp;rules.
        </p>
      </div>

      {/* Icons grid */}
      <div className="flex flex-wrap justify-center gap-1.5 md:justify-start">
        {agents.map((agent, i) => (
          <AgentIcon key={agent} agent={agent} index={i} />
        ))}
      </div>
    </div>
  )
}
