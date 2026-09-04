# Fiddle of Transmutation

Mobile-first **homebrew** D&D 5e-style phone web app. Tune a magical fiddle to one of **78 materials / elements**, then roll a concrete mechanical effect for the table.

Zero build — open `index.html` locally or on GitHub Pages (loads `materials-part1.js`, `materials-part2.js`, `app.js`).

> **Homebrew.** Not official Wizards of the Coast / D&D Beyond content. No fake book citations.

## Quick start

1. Open [`index.html`](./index.html) on your phone (serve the folder, or enable GitHub Pages).
2. Search or filter by category (Elements, Metals, Fantasy Metals, Nature).
3. Select the material your fiddle is made of / tuned to.
4. Tap **Play Fiddle** and apply the mechanical text (DM adjudicates).

## How effects work

Each of the **78 materials** maps to its own **12-effect** table built from:

- Damage/affinity type (fire, cold, necrotic, force, …)
- Default save ability + DC
- A **signature unique** mechanical effect
- Shared templates filled with that material’s numbers: Affinity Burst (2d6), Resistance Hum, Weapon Song (+1d4 typed), Ward, Condition Cadence, Utility Tone, Pulse Nova, Lingering Aura, Transmute Touch, Countertune, Echo Mark

Rolls show `d12 → N`, title, full mechanical text, and tags. **936** total material×effect combinations (78×12).

## Materials (78)

| Category | Count | Examples |
|----------|------:|----------|
| Elements | 22 | Water, Fire, Lightning, Ice, Void, Magma, Shadow… |
| Metals | 20 | Iron, Steel, Copper, Silver, Gold, Titanium, Mercury… |
| Fantasy Metals | 16 | Mithral, Adamantine, Cold Iron, Starmetal, Voidsteel… |
| Nature | 20 | Oak/Pine/Ebony wood, Bone, Crystal, Amber, Coral, Jade… |

## Files

- `index.html` — mobile UI shell
- `materials-part1.js` / `materials-part2.js` — material catalog
- `app.js` — search/filter, effect builder, roller

## UX

- Thumb-friendly search + category chips
- Scrollable material list for phones
- Large **Play Fiddle** button + snappy result flash

## Hosting

Enable GitHub Pages on this repo (root). Local: open the folder via any static server (or open `index.html` if your browser allows local script loads).

## License / credit

Unofficial fan utility for personal tables. Dungeons & Dragons is a trademark of Wizards of the Coast.
