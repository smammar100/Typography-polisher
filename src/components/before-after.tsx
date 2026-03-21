"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { examples, categories, type Example } from "@/lib/examples"

export function BeforeAfter({ fullPage = false }: { fullPage?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAfter, setShowAfter] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const filtered = activeCategory === "All"
    ? examples
    : examples.filter((e) => e.category === activeCategory)

  const current: Example | undefined = filtered[activeIndex]

  const next = useCallback(() => {
    setShowAfter(false)
    setActiveIndex((i) => (i + 1) % filtered.length)
  }, [filtered.length])

  useEffect(() => {
    setActiveIndex(0)
    setShowAfter(false)
  }, [activeCategory])

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setShowAfter((prev) => {
          if (prev) {
            setTimeout(next, 0)
            return false
          }
          return true
        })
      }, 2500)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoPlay, next])

  if (!current) return null

  return (
    <div className={fullPage ? "" : ""}>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat)
              setAutoPlay(false)
            }}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[var(--accent)] text-[var(--bg)]"
                : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Main display */}
      <div className="mt-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.id}-${showAfter}`}
            initial={{ opacity: 0.8, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.8, scale: 0.99 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`rounded-lg border p-6 ${fullPage ? "min-h-[200px]" : "min-h-[140px]"} flex items-center ${
              showAfter
                ? "border-[var(--green)]/30 bg-[var(--green)]/5"
                : "border-[var(--red)]/30 bg-[var(--red)]/5"
            }`}
          >
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                    showAfter
                      ? "bg-[var(--green)]/20 text-[var(--green)]"
                      : "bg-[var(--red)]/20 text-[var(--red)]"
                  }`}
                >
                  {showAfter ? "After" : "Before"}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{current.title}</span>
              </div>
              <p className={`font-mono ${fullPage ? "text-base" : "text-sm"} leading-relaxed text-[var(--text)] whitespace-pre-wrap`}>
                {showAfter ? current.after : current.before}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-colors hover:opacity-90"
          >
            {showAfter ? "Show Before" : "Apply Polish"}
          </button>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            {autoPlay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {autoPlay ? "Pause" : "Auto-play"}
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[var(--border)]">
          <motion.div
            className="h-full rounded-full bg-[var(--accent)]"
            initial={false}
            animate={{ width: `${((activeIndex + 1) / filtered.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Changes breakdown */}
        {showAfter && current.changes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-5 space-y-2"
          >
            <h4 className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              Changes applied
            </h4>
            {current.changes.map((change, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs"
              >
                <code className="text-[var(--red)] line-through">{change.before}</code>
                <span className="text-[var(--text-muted)]">&rarr;</span>
                <code className="text-[var(--green)]">{change.after}</code>
                <span className="text-[var(--text-muted)]">&mdash; {change.description}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
