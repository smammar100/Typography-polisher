"use client"

import { Section } from "@/components/section"
import { rules } from "@/lib/examples"

const ruleDetails = [
  {
    number: 1,
    name: "Widow & Orphan Prevention",
    description: "Prevents single words from sitting alone on the last line of a paragraph or heading. Uses non-breaking spaces (&nbsp;) to bind the last two words together, and recommends CSS text-wrap: balance for\u00A0headings.",
    examples: [
      { before: "The quick brown fox jumps over the lazy dog", after: "The quick brown fox jumps over the lazy\u00A0dog" },
      { before: '<h2>A long heading</h2>', after: '<h2 style="text-wrap: balance">A long heading</h2>' },
    ],
    css: "h1, h2, h3 { text-wrap: balance; }",
  },
  {
    number: 2,
    name: "Compound Hyphen Removal",
    description: "Removes unnecessary hyphens from common compound words (well-known \u2192 well known) and multi-word compounds (state-of-the-art \u2192 state of the art). Preserves prefix hyphens (pre-, non-, anti-), proper nouns (Rolls-Royce), and CSS properties\u00A0(font-size).",
    examples: [
      { before: "well-known, high-quality", after: "well known, high quality" },
      { before: "state-of-the-art", after: "state of the art" },
      { before: "pre-existing (preserved)", after: "pre-existing (preserved)" },
    ],
  },
  {
    number: 3,
    name: "Smart Punctuation",
    description: 'Converts straight quotes to curly quotes, straight apostrophes to smart apostrophes, three dots to proper ellipsis (\u2026), and ASCII symbols to Unicode equivalents ((c) \u2192\u00A0\u00A9).',
    examples: [
      { before: '"hello"', after: '\u201Chello\u201D' },
      { before: "don't", after: "don\u2019t" },
      { before: "wait...", after: "wait\u2026" },
      { before: "(c) (tm)", after: "\u00A9 \u2122" },
    ],
  },
  {
    number: 4,
    name: "Dash Normalization",
    description: "Converts double hyphens (--) to em dashes (\u2014) with thin spaces, and hyphens in numeric ranges to en dashes (\u2013). Preserves intentional hyphens in prefixed\u00A0words.",
    examples: [
      { before: "word -- another", after: "word\u2009\u2014\u2009another" },
      { before: "pages 10-25", after: "pages 10\u201325" },
      { before: "Monday-Friday", after: "Monday\u2013Friday" },
    ],
  },
  {
    number: 5,
    name: "Whitespace Cleanup",
    description: "Collapses multiple spaces, removes spaces before punctuation, adds spaces after punctuation when missing, and normalizes dimension\u00A0formatting.",
    examples: [
      { before: "too  many   spaces", after: "too many spaces" },
      { before: "hello , world .", after: "hello, world." },
      { before: "10x12", after: "10\u00D712" },
    ],
  },
  {
    number: 6,
    name: "Line Length & Typography",
    description: "Recommends max-width: 65ch for body text to maintain optimal reading line length of 45\u201375 characters per\u00A0line.",
    examples: [
      { before: "p { width: 100%; }", after: "p { max-width: 65ch; }" },
    ],
    css: "p, .prose { max-width: 65ch; }",
  },
  {
    number: 7,
    name: "UX Copy Best Practices",
    description: "Flags filler words, vague CTAs, and wordy constructions. Suggests concise alternatives that improve interface\u00A0clarity.",
    examples: [
      { before: "Click here to submit the form", after: "Submit" },
      { before: "In order to proceed", after: "To proceed" },
    ],
  },
  {
    number: 8,
    name: "Text Alignment",
    description: "Ensures body text is left aligned for LTR languages. Justified text creates uneven word spacing that reduces\u00A0readability.",
    examples: [
      { before: "text-align: justify;", after: "text-align: left;" },
    ],
    css: "body { text-align: left; }",
  },
  {
    number: 9,
    name: "Accessibility & Neuro Inclusive Design",
    description: "Enforces WCAG 2.2 AA contrast ratios (4.5:1 for body, 3:1 for large text). Flags italic body text, all caps paragraphs, and low contrast\u00A0combinations.",
    examples: [
      { before: "color: #999 on #fff (2.8:1)", after: "color: #767676 on #fff (4.5:1)" },
    ],
  },
  {
    number: 10,
    name: "Tracking & Letter Spacing",
    description: "Adds letter-spacing: 0.08em for all caps text to improve readability. Removes excessive letter spacing on body\u00A0text.",
    examples: [
      { before: "text-transform: uppercase;", after: "text-transform: uppercase; letter-spacing: 0.08em;" },
    ],
    css: ".uppercase, [style*='text-transform: uppercase'] { letter-spacing: 0.08em; }",
  },
  {
    number: 11,
    name: "Font Performance",
    description: "Recommends WOFF2 format for smallest file size and font-display: swap to prevent invisible text during font\u00A0loading.",
    examples: [
      { before: "src: url('font.ttf');", after: "src: url('font.woff2'); font-display: swap;" },
    ],
    css: "@font-face { font-display: swap; }",
  },
  {
    number: 12,
    name: "White Space & Vertical Rhythm",
    description: "Establishes consistent spacing using an 8px grid system (8, 16, 24, 32, 40, 48, 64, 80px). Creates visual harmony through proportional\u00A0spacing.",
    examples: [
      { before: "margin: 13px; padding: 7px;", after: "margin: 16px; padding: 8px;" },
    ],
  },
  {
    number: 13,
    name: "Number Styling",
    description: "Applies tabular-nums for data tables (aligned columns) and proportional-nums for body text (natural reading\u00A0flow).",
    examples: [
      { before: "font-variant-numeric: normal;", after: "font-variant-numeric: tabular-nums;" },
    ],
    css: "table td { font-variant-numeric: tabular-nums; }",
  },
  {
    number: 14,
    name: "Format Specific Notes",
    description: "Handles format aware character encoding: HTML entities (&amp;nbsp;), Markdown escapes, JSX Unicode (\\u00A0), and .docx non-breaking\u00A0spaces.",
    examples: [
      { before: "HTML: &amp;nbsp;", after: "HTML: &nbsp;" },
      { before: 'JSX: "\\u00A0"', after: 'JSX: "\\u00A0"' },
    ],
  },
  {
    number: 15,
    name: "Browser & Encoding Compatibility",
    description: "Ensures UTF-8 encoding declaration in all documents. All typographic characters used by this skill are supported in every modern\u00A0browser.",
    examples: [
      { before: '<meta charset="latin-1">', after: '<meta charset="UTF-8">' },
    ],
    css: '<meta charset="UTF-8">',
  },
]

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-16 px-6 py-12" id="rules">
      <Section>
        <h1 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">Features & Rules Reference</h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
          Deep dive into each of the 15 typography rules with full examples and CSS&nbsp;snippets.
        </p>
      </Section>

      {ruleDetails.map((rule) => (
        <Section key={rule.number}>
          <div className="flex items-baseline gap-3">
            <span className="rounded bg-[var(--accent)]/15 px-2 py-0.5 font-mono text-xs font-medium text-[var(--accent)]">
              {String(rule.number).padStart(2, "0")}
            </span>
            <h2 className="text-xl font-bold text-[var(--text)]">{rule.name}</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{rule.description}</p>

          <div className="mt-4 space-y-2">
            {rule.examples.map((ex, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--code-bg)] px-4 py-2.5 font-mono text-sm"
              >
                <span className="text-[var(--red)] line-through">{ex.before}</span>
                <span className="text-[var(--text-muted)]">&rarr;</span>
                <span className="text-[var(--green)]">{ex.after}</span>
              </div>
            ))}
          </div>

          {rule.css && (
            <div className="mt-3 rounded-md border border-[var(--border)] bg-[var(--code-bg)] px-4 py-3">
              <span className="mb-1.5 block text-xs font-medium text-[var(--text-muted)]">CSS</span>
              <code className="font-mono text-sm text-[var(--accent)]">{rule.css}</code>
            </div>
          )}
        </Section>
      ))}
    </div>
  )
}
