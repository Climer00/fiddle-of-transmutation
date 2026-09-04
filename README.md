# Fiddle of Transmutation

Mobile-first **homebrew** D&D 5e-style phone web app. Tune a magical fiddle to one of **78 materials / elements**, then roll a concrete mechanical effect for the table.

Zero build — open `index.html` locally, on GitHub Pages, or via htmlpreview.

> **Homebrew.** Not official Wizards of the Coast / D&D Beyond content. No fake book citations.

## Quick start

1. Open [`index.html`](./index.html) on your phone.
2. Search or filter by category (Elements, Metals, Fantasy Metals, Nature).
3. Select the material your fiddle is made of / tuned to.
4. Tap **Play Fiddle** and apply the mechanical text (DM adjudicates).

## How effects work

Each material has:

- A **damage/affinity type** (fire, cold, necrotic, force, …)
- A **default save ability + DC**
- A **signature unique effect**
- A generated **12-effect table** mixing:
  - Affinity damage burst (2d6, save for half)
  - Resistance hum (concentration)
  - Weapon song (+1d4 typed damage, magical)
  - Ward (+2 AC, save advantage)
  - Condition cadence
  - Utility tone
  - Pulse nova (short AoE, slight self risk)
  - Lingering aura (difficult terrain + chip damage)
  - Signature effect (material-specific)
  - Transmute touch
  - Countertune (damage reduction window)
  - Echo mark (delayed extra damage)

Rolls show `d12 → N`, title, full mechanical text, and tags.

## Materials (78)

| Category | Count | Examples |
|----------|------:|----------|
| Elements | 22 | Water, Fire, Lightning, Ice, Void, Magma, Shadow… |
| Metals | 20 | Iron, Steel, Copper, Silver, Gold, Titanium, Mercury… |
| Fantasy Metals | 16 | Mithral, Adamantine, Cold Iron, Starmetal, Voidsteel… |
| Nature | 20 | Oak/Pine/Ebony wood, Bone, Crystal, Amber, Coral, Jade… |

## UX

- Thumb-friendly search + category chips
- Scrollable material list sized for phones
- Large **Play Fiddle** button
- Snappy result flash; readable mid-session
- Works offline once loaded

## Hosting

Enable GitHub Pages on this repo (root), or use [htmlpreview](https://htmlpreview.github.io/).

## License / credit

Unofficial fan utility for personal tables. Dungeons & Dragons is a trademark of Wizards of the Coast.
