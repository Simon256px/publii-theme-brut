# Brut — a Publii theme

A bold, brutalist blog theme for [Publii](https://getpublii.com), the privacy-focused static site CMS.

Cream paper background, giant condensed uppercase titles, monospace labels, pastel cards, pill buttons and a pitch-black footer. Design language inspired by the work of [Eduard Bodak](https://www.eduardbodak.com/).

![Brut theme](thumbnail.png)

## Features

- **Zero external requests** — no web fonts, no CDN, no analytics. System font stacks only (condensed grotesque + monospace). Perfect fit for Publii's privacy-first philosophy.
- **Fully configurable from the Publii UI** — colors (cream, ink, accent, three pastels), hero texts, all interface labels (easy to translate to any language), date format, uppercase titles toggle.
- **Modern Publii support** — pages, posts page, tag pages + tags list, author pages, 404, RSS/JSON feeds, block editor, responsive images, comments custom code.
- **Two menus** — pill buttons in the header (with dropdown submenus), monospace link list in the black footer.
- **Feature card** — the latest post can be highlighted as a big pastel card on the front page.
- **Custom editor elements** — black marker highlight, mono label, three pastel boxes, big statement paragraph.
- **Lightweight** — a single CSS file, ~30 lines of vanilla JS (menu toggle + footer clock). No jQuery, no build step.
- Accessible: semantic markup, `prefers-reduced-motion` respected, keyboard-friendly submenus.

## Installation

### From a release zip

1. Download the latest `brut.zip` from the [Releases](../../releases) page.
2. In Publii, go to **Themes** (left sidebar) → **Install theme** and select the zip.
3. Select **Brut** as your site theme, then customize it in **Theme settings**.

### From source

Clone this repository into Publii's themes directory, then restart Publii:

```
# Windows
git clone https://github.com/Simon256px/publii-theme-brut "%USERPROFILE%\Documents\Publii\themes\brut"

# macOS / Linux
git clone https://github.com/Simon256px/publii-theme-brut ~/Documents/Publii/themes/brut
```

## Theme settings overview

| Group | What you can change |
|---|---|
| Hero | Kicker line, big title, intro text, feature-card toggle |
| Colors | Background, ink, accent, pastel 1–3 |
| Typography | Uppercase titles on/off, min/max root font size |
| Footer | Copyright text, live clock label (e.g. `PARIS`), back-to-top |
| Labels | Every interface string (Read, Older, Newer, Tags…) — translate the theme in one minute |
| Additional | Date format, favicon |

## Tips

- **Hero intro**: wrap a sentence in *italic* (`<em>`) to render it in the muted gray of the original design.
- **Marker highlight**: in the editor, apply the *Marker (black highlight)* custom element to a paragraph for the black-on-cream label effect.
- **Footer links**: add external links to the *Footer menu*; items opening in a new tab automatically get a ↗ arrow.

## En français

Brut est un thème de blog brutaliste pour [Publii](https://getpublii.com) : fond crème, titres condensés géants, étiquettes monospace, cartes pastel. Tous les textes de l'interface (« Read », « Older », etc.) se traduisent directement dans **Réglages du thème → Labels**, sans toucher au code. Aucune requête externe : pas de polices web, pas de CDN.

## License

[MIT](LICENSE) — © 2026 Simon Courtois.

Design language inspired by [eduardbodak.com](https://www.eduardbodak.com/); no code or assets from that site are used in this theme.
