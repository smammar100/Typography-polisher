"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Install", href: "/install" },
  { label: "Features", href: "/features" },
  { label: "Before & After Demo", href: "/demo" },
  { label: "Changelog", href: "/changelog" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)]"
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4 text-[var(--text-muted)]" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-64 border-r border-[var(--border)] bg-[var(--bg)] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[var(--text)]">Typography Polisher</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-[var(--border)]"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4 text-[var(--text-muted)]" />
                </button>
              </div>
              <nav className="mt-6">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                            isActive
                              ? "text-[var(--text)] font-medium bg-[var(--surface)]"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
