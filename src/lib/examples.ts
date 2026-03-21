export interface Example {
  id: string
  category: string
  title: string
  before: string
  after: string
  changes: Change[]
}

export interface Change {
  before: string
  after: string
  description: string
}

export const categories = [
  "All",
  "Widows",
  "Smart Punctuation",
  "Dashes",
  "Compound Hyphens",
  "Whitespace",
  "Full Pipeline",
] as const

export const examples: Example[] = [
  // Widows
  {
    id: "widow-heading",
    category: "Widows",
    title: "Heading widow prevention",
    before: "The quick brown fox jumps over the lazy dog",
    after: "The quick brown fox jumps over the lazy\u00A0dog",
    changes: [
      {
        before: "lazy dog",
        after: "lazy\u00A0dog",
        description: "Non-breaking space prevents widow on last two words",
      },
    ],
  },
  {
    id: "widow-subheading",
    category: "Widows",
    title: "Subheading widow prevention",
    before: "Build better software with modern tools",
    after: "Build better software with modern\u00A0tools",
    changes: [
      {
        before: "modern tools",
        after: "modern\u00A0tools",
        description: "Non-breaking space binds last two words together",
      },
    ],
  },
  {
    id: "widow-card-title",
    category: "Widows",
    title: "Card title widow prevention",
    before: "Getting started with the API",
    after: "Getting started with the\u00A0API",
    changes: [
      {
        before: "the API",
        after: "the\u00A0API",
        description: "Prevents short last word from wrapping alone",
      },
    ],
  },
  {
    id: "widow-body",
    category: "Widows",
    title: "Body paragraph widow prevention",
    before: "This paragraph has enough words that the last word might end up on a line all by itself which looks bad in typeset text",
    after: "This paragraph has enough words that the last word might end up on a line all by itself which looks bad in typeset\u00A0text",
    changes: [
      {
        before: "typeset text",
        after: "typeset\u00A0text",
        description: "Non-breaking space on final two words of paragraph",
      },
    ],
  },
  {
    id: "widow-css",
    category: "Widows",
    title: "CSS text-wrap: balance",
    before: '<h2 style="max-width: 600px">A heading that wraps awkwardly</h2>',
    after: '<h2 style="max-width: 600px; text-wrap: balance">A heading that wraps awkwardly</h2>',
    changes: [
      {
        before: 'max-width: 600px"',
        after: 'max-width: 600px; text-wrap: balance"',
        description: "CSS text-wrap: balance distributes words evenly across lines",
      },
    ],
  },
  // Smart Punctuation
  {
    id: "curly-quotes",
    category: "Smart Punctuation",
    title: "Curly double quotes",
    before: '"Hello world" she said',
    after: '\u201CHello world\u201D she said',
    changes: [
      {
        before: '"Hello',
        after: '\u201CHello',
        description: "Straight opening quote \u2192 curly opening quote",
      },
      {
        before: 'world"',
        after: 'world\u201D',
        description: "Straight closing quote \u2192 curly closing quote",
      },
    ],
  },
  {
    id: "apostrophes",
    category: "Smart Punctuation",
    title: "Smart apostrophes",
    before: "It's a beautiful day, don't you think?",
    after: "It\u2019s a beautiful day, don\u2019t you think?",
    changes: [
      {
        before: "It's",
        after: "It\u2019s",
        description: "Straight apostrophe \u2192 curly apostrophe",
      },
      {
        before: "don't",
        after: "don\u2019t",
        description: "Straight apostrophe \u2192 curly apostrophe",
      },
    ],
  },
  {
    id: "ellipsis",
    category: "Smart Punctuation",
    title: "Proper ellipsis",
    before: "Wait for it... the best is yet to come...",
    after: "Wait for it\u2026 the best is yet to come\u2026",
    changes: [
      {
        before: "it...",
        after: "it\u2026",
        description: "Three periods \u2192 single ellipsis character (\u2026)",
      },
    ],
  },
  {
    id: "symbols",
    category: "Smart Punctuation",
    title: "Symbol replacements",
    before: "(c) 2024 Acme Corp. All rights reserved. (tm)",
    after: "\u00A9 2024 Acme Corp. All rights reserved. \u2122",
    changes: [
      {
        before: "(c)",
        after: "\u00A9",
        description: "(c) \u2192 copyright symbol",
      },
      {
        before: "(tm)",
        after: "\u2122",
        description: "(tm) \u2192 trademark symbol",
      },
    ],
  },
  {
    id: "single-quotes",
    category: "Smart Punctuation",
    title: "Curly single quotes",
    before: "She said, 'hello there'",
    after: "She said, \u2018hello there\u2019",
    changes: [
      {
        before: "'hello",
        after: "\u2018hello",
        description: "Straight single quote \u2192 curly opening single quote",
      },
      {
        before: "there'",
        after: "there\u2019",
        description: "Straight single quote \u2192 curly closing single quote",
      },
    ],
  },
  // Dashes
  {
    id: "em-dashes",
    category: "Dashes",
    title: "Em dash normalization",
    before: "Typography -- the art of arranging type -- matters more than you think",
    after: "Typography\u2009\u2014\u2009the art of arranging type\u2009\u2014\u2009matters more than you think",
    changes: [
      {
        before: " -- ",
        after: "\u2009\u2014\u2009",
        description: "Double hyphen \u2192 em dash with thin spaces",
      },
    ],
  },
  {
    id: "number-ranges",
    category: "Dashes",
    title: "Number ranges with en dash",
    before: "Pages 10-25, years 2020-2024",
    after: "Pages 10\u201325, years 2020\u20132024",
    changes: [
      {
        before: "10-25",
        after: "10\u201325",
        description: "Hyphen between numbers \u2192 en dash",
      },
      {
        before: "2020-2024",
        after: "2020\u20132024",
        description: "Hyphen between years \u2192 en dash",
      },
    ],
  },
  {
    id: "day-time-ranges",
    category: "Dashes",
    title: "Day and time ranges",
    before: "Monday-Friday, 9:00am-5:00pm",
    after: "Monday\u2013Friday, 9:00am\u20135:00pm",
    changes: [
      {
        before: "Monday-Friday",
        after: "Monday\u2013Friday",
        description: "Hyphen in day range \u2192 en dash",
      },
      {
        before: "9:00am-5:00pm",
        after: "9:00am\u20135:00pm",
        description: "Hyphen in time range \u2192 en dash",
      },
    ],
  },
  {
    id: "preserved-dashes",
    category: "Dashes",
    title: "Preserved intentional dashes",
    before: "self-aware, re-enter, co-operate",
    after: "self-aware, re-enter, co-operate",
    changes: [
      {
        before: "self-aware",
        after: "self-aware",
        description: "Prefix hyphens are preserved (not converted to dashes)",
      },
    ],
  },
  // Compound Hyphens
  {
    id: "common-compounds",
    category: "Compound Hyphens",
    title: "Common compound word dehyphenation",
    before: "A well-known, high-quality, real-time system",
    after: "A well known, high quality, real time system",
    changes: [
      {
        before: "well-known",
        after: "well known",
        description: "Common compound: remove hyphen",
      },
      {
        before: "high-quality",
        after: "high quality",
        description: "Common compound: remove hyphen",
      },
      {
        before: "real-time",
        after: "real time",
        description: "Common compound: remove hyphen",
      },
    ],
  },
  {
    id: "multi-word-compounds",
    category: "Compound Hyphens",
    title: "Multi-word compound dehyphenation",
    before: "An out-of-the-box, state-of-the-art solution",
    after: "An out of the box, state of the art solution",
    changes: [
      {
        before: "out-of-the-box",
        after: "out of the box",
        description: "Multi-word compound: remove all hyphens",
      },
      {
        before: "state-of-the-art",
        after: "state of the art",
        description: "Multi-word compound: remove all hyphens",
      },
    ],
  },
  {
    id: "preserved-prefixes",
    category: "Compound Hyphens",
    title: "Preserved prefix hyphens",
    before: "pre-existing, non-standard, anti-pattern",
    after: "pre-existing, non-standard, anti-pattern",
    changes: [
      {
        before: "pre-existing",
        after: "pre-existing",
        description: "Prefix hyphens (pre-, non-, anti-) are intentionally preserved",
      },
    ],
  },
  {
    id: "css-properties",
    category: "Compound Hyphens",
    title: "CSS properties preserved",
    before: "font-size, line-height, border-radius",
    after: "font-size, line-height, border-radius",
    changes: [
      {
        before: "font-size",
        after: "font-size",
        description: "CSS properties are detected and preserved",
      },
    ],
  },
  {
    id: "proper-nouns",
    category: "Compound Hyphens",
    title: "Proper nouns preserved",
    before: "Rolls-Royce, Hewlett-Packard, Coca-Cola",
    after: "Rolls-Royce, Hewlett-Packard, Coca-Cola",
    changes: [
      {
        before: "Rolls-Royce",
        after: "Rolls-Royce",
        description: "Proper nouns with hyphens are preserved",
      },
    ],
  },
  // Whitespace
  {
    id: "double-spaces",
    category: "Whitespace",
    title: "Double space cleanup",
    before: "Too  many   spaces   between    words",
    after: "Too many spaces between words",
    changes: [
      {
        before: "Too  many",
        after: "Too many",
        description: "Multiple spaces collapsed to single space",
      },
    ],
  },
  {
    id: "punctuation-spacing",
    category: "Whitespace",
    title: "Punctuation spacing",
    before: "Hello , world . How are you ?",
    after: "Hello, world. How are you?",
    changes: [
      {
        before: "Hello ,",
        after: "Hello,",
        description: "Remove space before punctuation",
      },
      {
        before: "world .",
        after: "world.",
        description: "Remove space before period",
      },
    ],
  },
  {
    id: "missing-spaces",
    category: "Whitespace",
    title: "Missing spaces after punctuation",
    before: "First sentence.Second sentence.Third one",
    after: "First sentence. Second sentence. Third one",
    changes: [
      {
        before: "sentence.Second",
        after: "sentence. Second",
        description: "Add space after period before capital letter",
      },
    ],
  },
  {
    id: "dimensions",
    category: "Whitespace",
    title: "Dimension formatting",
    before: "The room is 10x12 feet, or 10 x 12 ft",
    after: "The room is 10\u00D712 feet, or 10\u00A0\u00D7\u00A012 ft",
    changes: [
      {
        before: "10x12",
        after: "10\u00D712",
        description: "Lowercase x \u2192 multiplication sign (\u00D7)",
      },
    ],
  },
  // Full Pipeline
  {
    id: "marketing-copy",
    category: "Full Pipeline",
    title: "Marketing copy: full pipeline",
    before: 'We\'re building a "best-in-class" platform -- used by 100-500 companies world-wide . It\'s well-known for being high-performance...',
    after: 'We\u2019re building a \u201Cbest in class\u201D platform\u2009\u2014\u2009used by 100\u2013500 companies world wide. It\u2019s well known for being high performance\u2026',
    changes: [
      { before: "We're", after: "We\u2019re", description: "Smart apostrophe" },
      { before: '"best-in-class"', after: '\u201Cbest in class\u201D', description: "Curly quotes + compound dehyphenation" },
      { before: " -- ", after: "\u2009\u2014\u2009", description: "Em dash with thin spaces" },
      { before: "100-500", after: "100\u2013500", description: "En dash for number range" },
      { before: "world-wide", after: "world wide", description: "Compound dehyphenation" },
      { before: " .", after: ".", description: "Remove space before period" },
      { before: "well-known", after: "well known", description: "Common compound dehyphenation" },
      { before: "...", after: "\u2026", description: "Proper ellipsis character" },
    ],
  },
  {
    id: "blog-post",
    category: "Full Pipeline",
    title: "Blog post: full pipeline",
    before: "In today's  fast-paced world , developers need \"cutting-edge\" tools . The gap between good and great is 10-15% -- and it's closing fast...",
    after: "In today\u2019s fast-paced world, developers need \u201Ccutting edge\u201D tools. The gap between good and great is 10\u201315%\u2009\u2014\u2009and it\u2019s closing\u00A0fast\u2026",
    changes: [
      { before: "today's", after: "today\u2019s", description: "Smart apostrophe" },
      { before: "  ", after: " ", description: "Double space collapsed" },
      { before: "world ,", after: "world,", description: "Space before comma removed" },
      { before: '"cutting-edge"', after: '\u201Ccutting edge\u201D', description: "Curly quotes + dehyphenation" },
      { before: " .", after: ".", description: "Space before period removed" },
      { before: "10-15%", after: "10\u201315%", description: "En dash for number range" },
      { before: " -- ", after: "\u2009\u2014\u2009", description: "Em dash" },
      { before: "it's", after: "it\u2019s", description: "Smart apostrophe" },
      { before: "closing fast...", after: "closing\u00A0fast\u2026", description: "Widow prevention + ellipsis" },
    ],
  },
  {
    id: "email-newsletter",
    category: "Full Pipeline",
    title: "Email newsletter: full pipeline",
    before: "What's new this week : We've shipped 3 high-impact features -- here's the run-down . Check pages 5-10 for details.Don't miss out!",
    after: "What\u2019s new this week: We\u2019ve shipped 3 high impact features\u2009\u2014\u2009here\u2019s the run down. Check pages 5\u201310 for details. Don\u2019t miss\u00A0out!",
    changes: [
      { before: "What's", after: "What\u2019s", description: "Smart apostrophe" },
      { before: "week :", after: "week:", description: "Space before colon removed" },
      { before: "We've", after: "We\u2019ve", description: "Smart apostrophe" },
      { before: "high-impact", after: "high impact", description: "Compound dehyphenation" },
      { before: " -- ", after: "\u2009\u2014\u2009", description: "Em dash" },
      { before: "here's", after: "here\u2019s", description: "Smart apostrophe" },
      { before: "run-down", after: "run down", description: "Compound dehyphenation" },
      { before: " .", after: ".", description: "Space before period removed" },
      { before: "5-10", after: "5\u201310", description: "En dash for page range" },
      { before: "details.Don't", after: "details. Don\u2019t", description: "Missing space + smart apostrophe" },
      { before: "miss out!", after: "miss\u00A0out!", description: "Widow prevention" },
    ],
  },
]

export const rules = [
  {
    number: 1,
    name: "Widow & Orphan Prevention",
    description: "Prevents single words from sitting alone on the last line of a paragraph or\u00A0heading.",
    before: "the lazy dog",
    after: "the lazy\u00A0dog",
    detail: "nbsp",
  },
  {
    number: 2,
    name: "Compound Hyphen Removal",
    description: "Removes unnecessary hyphens from common compound words while preserving intentional\u00A0ones.",
    before: "well-known",
    after: "well known",
  },
  {
    number: 3,
    name: "Smart Punctuation",
    description: "Converts straight quotes, apostrophes, and ellipses to their typographically correct\u00A0forms.",
    before: '"hello"',
    after: "\u201Chello\u201D",
  },
  {
    number: 4,
    name: "Dash Normalization",
    description: "Converts double hyphens to em dashes and hyphens in ranges to en\u00A0dashes.",
    before: "--",
    after: "\u2014",
  },
  {
    number: 5,
    name: "Whitespace Cleanup",
    description: "Removes extra spaces, fixes spacing around punctuation, and normalizes\u00A0whitespace.",
    before: "word .",
    after: "word.",
  },
  {
    number: 6,
    name: "Line Length & Typography",
    description: "Ensures optimal reading line length for body text using CSS\u00A0properties.",
    before: "width: auto",
    after: "max-width: 65ch",
  },
  {
    number: 7,
    name: "UX Copy Best Practices",
    description: "Flags filler words and suggests concise alternatives for interface\u00A0copy.",
    before: "Click here to submit",
    after: "Submit",
  },
  {
    number: 8,
    name: "Text Alignment",
    description: "Ensures body text is left aligned for optimal readability in LTR\u00A0languages.",
    before: "text-align: justify",
    after: "text-align: left",
  },
  {
    number: 9,
    name: "Accessibility & Neuro Inclusive",
    description: "Enforces WCAG 2.2 contrast ratios and neuro inclusive design\u00A0patterns.",
    before: "contrast 2:1",
    after: "contrast 4.5:1",
  },
  {
    number: 10,
    name: "Tracking & Letter Spacing",
    description: "Adds proper letter spacing for all caps text and removes excessive\u00A0tracking.",
    before: "ALL CAPS +0em",
    after: "ALL CAPS +0.08em",
  },
  {
    number: 11,
    name: "Font Performance",
    description: "Optimizes font loading with WOFF2 format and font-display: swap for faster\u00A0rendering.",
    before: "font.ttf",
    after: "font.woff2 + swap",
  },
  {
    number: 12,
    name: "White Space & Vertical Rhythm",
    description: "Establishes consistent spacing using an 8px grid system for visual\u00A0harmony.",
    before: "margin: 13px",
    after: "margin: 16px (8px grid)",
  },
  {
    number: 13,
    name: "Number Styling",
    description: "Applies tabular numerals for data tables and proportional numerals for body\u00A0text.",
    before: "font-variant: normal",
    after: "font-variant-numeric: tabular-nums",
  },
  {
    number: 14,
    name: "Format Specific Notes",
    description: "Applies format aware rules for HTML entities, Markdown escapes, JSX, and\u00A0.docx.",
    before: "&amp;nbsp;",
    after: "\\u00A0 (JSX)",
  },
  {
    number: 15,
    name: "Browser & Encoding",
    description: "Ensures UTF-8 encoding everywhere and proper character rendering across\u00A0browsers.",
    before: "charset=latin-1",
    after: "charset=UTF-8",
  },
]

export const agents = [
  "Claude Code",
  "Cursor",
  "GitHub Copilot",
  "Codex CLI",
  "Windsurf",
  "Gemini CLI",
  "Roo Code",
  "Trae",
  "OpenCode",
  "Antigravity",
  "Kiro CLI",
  "Cline",
]

export const browserSupport = [
  { char: "Non-breaking space", unicode: "U+00A0", html: "&nbsp;", support: "All modern browsers" },
  { char: "Left double quote \u201C", unicode: "U+201C", html: "&ldquo;", support: "All modern browsers" },
  { char: "Right double quote \u201D", unicode: "U+201D", html: "&rdquo;", support: "All modern browsers" },
  { char: "Left single quote \u2018", unicode: "U+2018", html: "&lsquo;", support: "All modern browsers" },
  { char: "Right single quote \u2019", unicode: "U+2019", html: "&rsquo;", support: "All modern browsers" },
  { char: "Em dash \u2014", unicode: "U+2014", html: "&mdash;", support: "All modern browsers" },
  { char: "En dash \u2013", unicode: "U+2013", html: "&ndash;", support: "All modern browsers" },
  { char: "Ellipsis \u2026", unicode: "U+2026", html: "&hellip;", support: "All modern browsers" },
  { char: "Thin space", unicode: "U+2009", html: "&thinsp;", support: "All modern browsers" },
  { char: "Copyright \u00A9", unicode: "U+00A9", html: "&copy;", support: "All modern browsers" },
  { char: "Trademark \u2122", unicode: "U+2122", html: "&trade;", support: "All modern browsers" },
  { char: "Multiplication \u00D7", unicode: "U+00D7", html: "&times;", support: "All modern browsers" },
]
