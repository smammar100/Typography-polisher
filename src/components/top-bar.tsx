"use client"

import { Star } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { MobileNav } from "./mobile-nav"

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/80 px-5 backdrop-blur-md lg:pl-[15.5rem]">
      <div className="flex items-center gap-3">
        <MobileNav />
        <span className="text-sm font-semibold text-[var(--text)] lg:hidden">
          Typography Polisher
        </span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/smammar100/Typography-polisher"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        >
          <Star className="h-3.5 w-3.5" />
          Star on GitHub
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
