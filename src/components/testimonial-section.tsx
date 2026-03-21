"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  variant: "amber" | "warm" | "gold" | "bronze" | "copper" | "sand"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I never realized how many straight quotes my AI was leaving behind until I installed this. Now every piece of copy looks professionally typeset.",
    author: "Sarah Chen",
    role: "Design Engineer",
    variant: "amber",
  },
  {
    id: 2,
    quote:
      "We shipped a marketing site with em dashes rendered as double hyphens. Typography Polisher would have caught that in seconds. Never again.",
    author: "Marcus Rivera",
    role: "Frontend Lead at Vercel",
    variant: "warm",
  },
  {
    id: 3,
    quote:
      "The widow removal alone is worth it. No more dangling single words at the end of headlines. It just works across every agent we use.",
    author: "Aisha Patel",
    role: "Content Designer",
    variant: "gold",
  },
  {
    id: 4,
    quote:
      "As someone who cares about craft, this skill is non-negotiable. It turns AI-generated copy from 'good enough' into 'publication ready'.",
    author: "James Thornton",
    role: "Creative Director",
    variant: "bronze",
  },
  {
    id: 5,
    quote:
      "Installed it once on our team's Cursor setup. Every developer now ships properly typeset copy without even thinking about it.",
    author: "Lin Wei",
    role: "Engineering Manager",
    variant: "copper",
  },
  {
    id: 6,
    quote:
      "The fact that it handles code blocks safely while fixing all the prose around them is brilliant. Zero false positives in three months.",
    author: "Devon Brooks",
    role: "Full-Stack Developer",
    variant: "sand",
  },
]

const variantStyles: Record<Testimonial["variant"], string> = {
  amber: "bg-[var(--accent)] text-[var(--bg)]",
  warm: "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]",
  gold: "bg-[var(--accent)]/15 text-[var(--text)]",
  bronze: "bg-[var(--text)] text-[var(--bg)]",
  copper: "bg-[var(--surface)] text-[var(--text)] border border-[var(--accent)]/30",
  sand: "bg-[var(--code-bg)] text-[var(--text)]",
}

function TestimonialCard({
  testimonial,
  position,
}: {
  testimonial: Testimonial
  position: "left" | "center" | "right"
}) {
  const positionAnimations = {
    left: { x: -40, scale: 0.9, opacity: 0.5 },
    center: { x: 0, scale: 1, opacity: 1 },
    right: { x: 40, scale: 0.9, opacity: 0.5 },
  }

  return (
    <motion.div
      layout
      animate={positionAnimations[position]}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      }}
      className={`w-[280px] flex-shrink-0 rounded-xl p-6 sm:w-[320px] ${
        variantStyles[testimonial.variant]
      } ${position === "center" ? "z-10" : ""}`}
    >
      <Quote className="mb-3 h-5 w-5 opacity-40" />
      <p className="text-sm leading-relaxed font-medium">
        {testimonial.quote}
      </p>
      <div className="mt-4 border-t border-current/10 pt-3">
        <p className="text-sm font-semibold">{testimonial.author}</p>
        <p className="text-xs opacity-60">{testimonial.role}</p>
      </div>
    </motion.div>
  )
}

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const getVisibleTestimonials = () => {
    const prevIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    const nextIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1

    return [
      { testimonial: testimonials[prevIndex], position: "left" as const },
      { testimonial: testimonials[currentIndex], position: "center" as const },
      { testimonial: testimonials[nextIndex], position: "right" as const },
    ]
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
          Social Proof
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[var(--text)] sm:text-3xl">
          Loved by developers who care about&nbsp;craft
        </h2>
      </div>

      {/* Slider */}
      <div className="relative -mx-5 flex items-center justify-center gap-2 overflow-hidden px-5 py-4 sm:-mx-8 sm:gap-4 sm:px-8">
        <AnimatePresence mode="sync">
          {getVisibleTestimonials().map(({ testimonial, position }) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              position={position}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={handleNext}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <span className="ml-2 text-xs tabular-nums text-[var(--text-muted)]">
          {currentIndex + 1} / {testimonials.length}
        </span>
      </div>
    </div>
  )
}
