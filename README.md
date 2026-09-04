# Fiddle of Transmutation

Mobile-first **homebrew** D&D 5e-style phone web app for rolling magical effects from four versions of a Fiddle of Transmutation. Zero build step — open `index.html` locally, on GitHub Pages, or via htmlpreview.

> **Homebrew tables.** Effects are original mechanical prompts for table use. They are **not** official Wizards of the Coast / D&D Beyond content and do not cite published books.

## Quick start

1. Open [`index.html`](./index.html) on your phone or laptop.
2. Pick a fiddle version (rarity).
3. Tap **Play Fiddle**.
4. Read the title + mechanical text aloud; the DM adjudicates saves, concentration, and stacking.

Works offline once loaded (static HTML/CSS/JS).

## How to use at the table

- Playing the fiddle is typically an **action** (DM may allow a bonus action).
- Unless an effect says otherwise, it targets **you** or a creature you choose within **30 ft** that can hear the tune.
- Use **your spell save DC** if you have one; otherwise the app’s default DC for that rarity (13 / 13 / 15 / 17).
- The fiddle is **audible** — Stealth checks have disadvantage while playing.
- Label results as homebrew when recording loot or session notes.

## Fiddle versions

| Version | Rarity | Effects | Default DC | Tone |
|--------|--------|---------|------------|------|
| Apprentice's Pine Fiddle | Common | 16 | 13 | Minor utility, cosmetic, low risk |
| Traveler's Maple Fiddle | Uncommon | 18 | 13 | Short buffs / debuffs |
| Archmage's Ebony Fiddle | Rare | 20 | 15 | Enlarge/reduce, haste-like, polymorph, strong buffs |
| Chaosgut Fiddle | Very Rare | 20 | 17 | Wilder, double-edged, riskier |

**Total: 74 mechanical effects.**

## UX

- Thumb-friendly version cards and a large **Play Fiddle** button
- Result shows effect title, full mechanical text, optional `dN → roll` number, and tags
- Light flash animation; snappy, mid-session readable
- Collapsible “How to use at the table” blurb in the UI

## Hosting

- GitHub Pages: enable Pages on this repo (root / `index.html`)
- Or paste the raw `index.html` URL into [htmlpreview](https://htmlpreview.github.io/)

## License / credit

Homebrew fan utility for personal table use. Dungeons & Dragons is a trademark of Wizards of the Coast; this project is unofficial.
