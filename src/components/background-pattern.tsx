"use client"

import { cn } from "@/lib/utils"

interface BackgroundPatternProps {
  className?: string
}

export function BackgroundPattern({ className }: BackgroundPatternProps) {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(to right, var(--border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
          repeating-linear-gradient(
            to right,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          ),
          repeating-linear-gradient(
            to bottom,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          )
        `,
        WebkitMaskImage: `
          repeating-linear-gradient(
            to right,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          ),
          repeating-linear-gradient(
            to bottom,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          )
        `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
        opacity: 0.5,
      }}
    />
  )
}
