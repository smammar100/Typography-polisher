# Typography Polisher

**Fix the typography your AI agents get wrong.**

15 professional fixes for widows, smart quotes, dashes, hyphens, and spacing across every AI agent and browser. One command.

## Quick Install

```bash
npx skills add smammar100/Typography-polisher
```

## What It Does

Typography Polisher is an AI agent skill that automatically applies professional typographic rules to any text output. It works across 14+ AI agents including Claude Code, Cursor, GitHub Copilot, Codex CLI, Windsurf, and Gemini CLI.

### 15 Rules

| # | Rule | Example |
|---|------|---------|
| 01 | Widow & Orphan Prevention | `the lazy dog` → `the lazy dog` (with `&nbsp;`) |
| 02 | Compound Hyphen Removal | `well-known` → `well known` |
| 03 | Smart Punctuation | `"hello"` → `"hello"` |
| 04 | Dash Normalization | `word -- another` → `word — another` |
| 05 | Whitespace Cleanup | `too  many   spaces` → `too many spaces` |
| 06 | Line Length & Typography | `width: 100%` → `max-width: 65ch` |
| 07 | UX Copy Best Practices | `Click here to submit` → `Submit` |
| 08 | Text Alignment | `text-align: justify` → `text-align: left` |
| 09 | Accessibility & Contrast | Enforces WCAG 2.2 AA (4.5:1 ratio) |
| 10 | Letter Spacing | Adds `letter-spacing: 0.08em` for uppercase |
| 11 | Font Performance | WOFF2 + `font-display: swap` |
| 12 | Vertical Rhythm | 8px grid system (8, 16, 24, 32, 40, 48, 64, 80) |
| 13 | Number Styling | `tabular-nums` for tables, `proportional-nums` for body |
| 14 | Format Specific Notes | HTML entities, Markdown escapes, JSX Unicode |
| 15 | Browser & Encoding | UTF-8 declaration in all documents |

## Agent-Specific Installation

<details>
<summary><strong>Claude Code</strong></summary>

```bash
mkdir -p ~/.claude/skills/typography-polisher
curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md \
  -o ~/.claude/skills/typography-polisher/SKILL.md
```
</details>

<details>
<summary><strong>Cursor</strong></summary>

```bash
mkdir -p .cursor/rules
cp SKILL.md .cursor/rules/typography-polisher.mdc
```
</details>

<details>
<summary><strong>GitHub Copilot</strong></summary>

```bash
curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md -o SKILL.md
```
</details>

<details>
<summary><strong>Windsurf</strong></summary>

```bash
cp SKILL.md .windsurfrules
```
</details>

<details>
<summary><strong>Codex CLI</strong></summary>

```bash
curl -sL https://raw.githubusercontent.com/smammar100/Typography-polisher/main/SKILL.md -o SKILL.md
```
</details>

<details>
<summary><strong>Manual / Other Agents</strong></summary>

```bash
git clone https://github.com/smammar100/Typography-polisher.git
cd Typography-polisher && ./install.sh
```
</details>

## Website

The Typography Polisher website is built with:

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Three.js** for interactive ASCII text rendering
- **Framer Motion** for animations

### Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Pages

- `/` — Landing page with interactive demo, rules overview, and install instructions
- `/features` — Deep dive into all 15 rules with examples and CSS snippets
- `/demo` — Before & after toggle for all 26 examples
- `/install` — Agent-specific installation guides
- `/changelog` — Version history

## Changelog

- **v2.1** (March 2026) — Dimension formatting, improved proper noun detection
- **v2.0** (February 2026) — Expanded to 15 rules, multi-agent installer, format-specific notes
- **v1.2** (January 2026) — Windsurf and Gemini CLI support
- **v1.1** (December 2025) — Cursor .mdc support, UX copy best practices
- **v1.0** (November 2025) — Initial release with 8 core rules

## License

MIT
