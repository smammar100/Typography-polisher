"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export function CopyButton({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[var(--border)]",
        className
      )}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-[var(--green)]" />
      ) : (
        <Copy className="h-3.5 w-3.5 text-[var(--text-muted)]" />
      )}
    </button>
  )
}
