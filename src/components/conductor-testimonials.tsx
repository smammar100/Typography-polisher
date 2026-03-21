"use client"

const TESTIMONIALS = [
  {
    quote:
      "I never realized how many straight quotes my AI was leaving behind until I installed this. Now every piece of copy looks professionally typeset.",
    author: "Sarah Chen",
    title: "Design Engineer",
  },
  {
    quote:
      "We shipped a marketing site with em dashes rendered as double hyphens. Typography Polisher would have caught that in seconds.",
    author: "Marcus Rivera",
    title: "Frontend Lead",
  },
  {
    quote:
      "The widow removal alone is worth it. No more dangling single words at the end of headlines.",
    author: "Aisha Patel",
    title: "Content Designer",
  },
  {
    quote:
      "As someone who cares about craft, this skill is non-negotiable. It turns AI-generated copy from 'good enough' into 'publication ready'.",
    author: "James Thornton",
    title: "Creative Director",
  },
  {
    quote:
      "Installed it once on our team's Cursor setup. Every developer now ships properly typeset copy without even thinking about it.",
    author: "Lin Wei",
    title: "Engineering Manager",
  },
  {
    quote:
      "The fact that it handles code blocks safely while fixing all the prose around them is brilliant. Zero false positives in three months.",
    author: "Devon Brooks",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "gave this a try and holy shit. smart quotes, proper dashes, widow fixes — all automatic. this is a new productivity unlock",
    author: "@typecraft_",
    title: "Typography enthusiast",
  },
  {
    quote:
      "Finally someone made typography rules that work with every AI agent. One SKILL.md to rule them all.",
    author: "Priya Sharma",
    title: "Senior Developer, Stripe",
  },
  {
    quote:
      "It took some adjustment, but now I can't imagine shipping copy without Typography Polisher running.",
    author: "Cole Bemis",
    title: "Design Engineer",
  },
]

export function ConductorTestimonials() {
  return (
    <section className="w-full bg-[var(--bg)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid rounded-lg bg-[var(--surface)] p-6"
            >
              {/* Quote */}
              <p className="mb-4 font-mono text-sm leading-relaxed text-[var(--text)]">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)]/20 font-mono text-xs font-bold text-[var(--accent)]">
                  {testimonial.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="font-mono text-sm font-medium text-[var(--text)]">
                    {testimonial.author}
                  </span>
                  <br />
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
