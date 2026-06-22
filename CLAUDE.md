# CLAUDE.md

Guidance for Claude Code (and anyone else) working in this repository.

## What this is

The website for **Silent Digital Income** — a static, no-build HTML/CSS/JS
site (`index.html`, `about.html`, `contact.html`, `css/styles.css`,
`js/main.js`, `assets/`). There is no framework, no package manager, and no
build step. Open the HTML files directly or serve the folder with any static
file server.

## Brand Foundation

### Tagline
**Learn. Create. Achieve.**

### Mission
Help people build a real, modest online income through small, achievable
steps — without hype, jargon, or pressure to "perform" online.

### Target audience
People aged 50+ who are curious about earning online but feel intimidated by
it. They are capable and willing to learn, but:
- Don't already live on social media and don't want to be on camera.
- Are wary of "get rich quick" hype and want something realistic.
- Want clear, step-by-step instruction, not assumed prior tech knowledge.
- May prefer working quietly, at their own pace, without public performance
  or comparison (introvert-friendly).

### Brand voice
Warm, plain-spoken, patient, and judgement-free. Talk *to* the reader like a
knowledgeable, encouraging friend — never *at* them like a sales funnel.

**Do:**
- Use short sentences and everyday words. If a term needs explaining, explain
  it inline rather than assuming it's known.
- Acknowledge that starting is intimidating, and reassure rather than hype.
- Frame progress as small, achievable steps (Learn → Create → Achieve).
- Respect the reader's time and privacy (e.g. "no spam, ever," no phone
  pressure, opt-in language).

**Don't:**
- Don't use hustle-culture language ("crush it," "10x," "side hustle bros").
- Don't use urgency/scarcity pressure tactics ("only 3 spots left!").
- Don't promise specific income outcomes or "get rich quick" framing.
- Don't assume the reader is active on social media or wants to be on camera.
- Don't bury the lead in jargon — explain plainly or don't use the term.

### Visual style
Warm neutral, professional, trustworthy, calm — never flashy or "techy."

- **Color palette** (defined as CSS variables in `css/styles.css`):
  cream/off-white backgrounds (`--color-bg`, `--color-bg-soft`), warm dark
  brown ink text (`--color-ink`), terracotta as the primary accent/CTA color
  (`--color-primary`), sage green as a secondary accent (`--color-secondary`).
  Colors were chosen to meet AA contrast — keep new color choices at or above
  that bar, since the audience skews toward needing higher legibility.
- **Typography:** Poppins for headings, Source Sans 3 for body text. Base
  body font size is intentionally large (18px) for readability — don't shrink
  it back down to "typical web app" sizes.
- **Tone of imagery/iconography:** simple, calm, geometric — no stock photos
  of laptops-on-beaches or fake-urgency graphics.
- **No autoplay, no flashing elements, no aggressive popups/modals.**

### Things to keep in mind when extending the site
- Mobile-first, responsive at all times — most of this audience browses on
  phones or tablets. Check the nav, forms, and grids at narrow widths after
  any layout change.
- Accessibility matters more than usual here: large tap targets, visible
  focus states, readable contrast, and `aria-live` feedback on forms are
  already in place — preserve them in new components.
- The signup form (`index.html#signup`) and contact form (`contact.html`)
  validate client-side but are **not connected to a backend**. Each has a
  `<!-- TODO -->` comment marking where to wire up Formspree, Netlify Forms,
  or an email tool — see `README.md` for details.
- The "Our Story" copy in `about.html` and the contact email
  (`hello@silentdigitalincome.com`) are placeholders pending real founder
  details.

## Working conventions
- No build tooling is intentionally in scope here — keep the site dependency-free
  unless there's a clear reason to introduce one.
- Keep all three pages (`index.html`, `about.html`, `contact.html`) in sync
  when changing shared markup (header nav, footer) since there's no
  templating layer — each page duplicates that markup.
