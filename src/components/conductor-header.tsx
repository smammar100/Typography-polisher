"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ConductorHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--bg)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-sm font-semibold tracking-[0.15em] text-[var(--text)]">
            /TYPO·POLISH
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/features"
            className="hidden font-mono text-sm text-[var(--text)] transition-colors hover:opacity-70 sm:block"
          >
            Features
          </Link>
          <Link
            href="/demo"
            className="hidden font-mono text-sm text-[var(--text)] transition-colors hover:opacity-70 sm:block"
          >
            Demo
          </Link>
          <a
            href="https://github.com/smammar100/Typography-polisher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-[var(--text)] px-4 py-2 font-mono text-sm text-[var(--bg)] transition-colors hover:opacity-90"
          >
            Install
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
