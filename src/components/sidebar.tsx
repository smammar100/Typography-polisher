"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Install", href: "/install" },
  { label: "Features", href: "/features" },
  { label: "Before & After Demo", href: "/demo" },
  { label: "Rules Reference", href: "/features#rules" },
  { label: "Compatibility", href: "/#compatibility" },
  { label: "Changelog", href: "/changelog" },
  { label: "FAQ", href: "/#faq" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-60 border-r border-[var(--border)] bg-[var(--bg)] lg:block">
      <div className="flex h-14 items-center border-b border-[var(--border)] px-5">
        <Link href="/" className="font-semibold tracking-tight text-[var(--text)]">
          Typography Polisher
        </Link>
      </div>
      <nav className="px-3 py-4">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const base = item.href.split("#")[0]
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : base !== "" && base !== "/" && pathname.startsWith(base)

            return (
              <li key={item.href} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-[var(--text)] font-medium"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full border-t border-[var(--border)] px-5 py-3">
        <a
          href="https://x.com/smammar100"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          Made by @smammar100
        </a>
      </div>
    </aside>
  )
}
