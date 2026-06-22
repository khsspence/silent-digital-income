# Silent Digital Income

Beginner-friendly online income brand and website project.

**Learn. Create. Achieve.** — helping people aged 50+ learn simple, realistic ways to earn online without overwhelm.

## Structure

```
index.html       Home (hero, brand story teaser, free guide signup)
about.html       About (full story, values, who it's for)
contact.html     Contact (contact form + alternate contact info)
css/styles.css   Shared styles (warm neutral palette, responsive layout)
js/main.js       Mobile nav toggle, footer year, form validation/feedback
assets/          Favicon and other static assets
```

This is a plain HTML/CSS/JS site with no build step — open `index.html`
directly in a browser, or serve the folder with any static file server.

## Local preview

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

Any static host works as-is: GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.
For GitHub Pages, enable Pages on this repo pointing at the branch/root, and the
site will be live with no further configuration.

## Connecting the forms

The signup form (`index.html#signup`) and the contact form (`contact.html`) are
fully styled and validated on the front end, but they **don't send data
anywhere yet** — there's no backend. Each form has a `<!-- TODO -->` comment
marking where to wire it up. To make them functional, pick one:

- **Formspree** ([formspree.io](https://formspree.io)) — easiest option, no
  code changes beyond setting `action="https://formspree.io/f/yourFormId"`.
- **Netlify Forms** — if hosting on Netlify, add `data-netlify="true"` to the
  `<form>` tag and it works automatically.
- **An email marketing tool** (Mailchimp, ConvertKit, etc.) — replace the
  signup form with the embed code they provide so subscribers land in your
  list directly.

## Customizing

- Brand colors and fonts live as CSS variables at the top of `css/styles.css`.
- Replace `hello@silentdigitalincome.com` in all three pages with your real
  contact address.
- The "Our Story" copy in `about.html` is a starting template — personalize it
  with real founder details before publishing.
