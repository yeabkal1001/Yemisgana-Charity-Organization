# Light Theme Implementation Plan

## Overview

The current site is the **dark theme** (deep forest greens, white text, lime accents) — we leave it untouched. We'll add a **complementary light theme** that inverts the depth hierarchy while keeping the same lime-green accent identity, then wire in a **theme toggle** so users can switch between them.

---

## Design System: Light Theme Palette

The light theme mirrors the dark theme's visual language — it uses the same lime accent, the same typographic weights, and the same layout — but replaces the dark backgrounds with warm parchment/cream tones and flips text colors to rich deep-forest greens on light grounds.

| Token | Dark value | Light value | Role |
|---|---|---|---|
| `--color-bg-primary` | `#030a03` (deep-forest) | `#f5f2eb` (cream) | Page background |
| `--color-bg-secondary` | `#08120a` (mid-forest) | `#fcfbf9` (parchment) | Section alt background |
| `--color-text-primary` | `#ffffff` | `#0a1e12` (forest) | Headings, body |
| `--color-text-muted` | `rgba(255,255,255,0.4–0.7)` | `rgba(10,30,18,0.4–0.7)` | Subtext |
| `--color-border` | `rgba(255,255,255,0.05)` | `rgba(10,30,18,0.08)` | Section dividers, card borders |
| `--color-lime` | `#a3e635` | `#a3e635` | Accent — same! |
| `--color-lime-light` | `#bef264` | `#84cc16` (slightly deeper) | Hover accent |
| `--color-surface` | `rgba(255,255,255,0.03)` | `rgba(10,30,18,0.04)` | Cards, overlays |
| `--color-scrollbar-track` | `deep-forest` | `cream` | Scrollbar |

---

## Architecture

### Theme switching strategy: `data-theme` attribute on `<html>`

- `<html data-theme="dark">` → existing dark CSS variables (already in `:root`)
- `<html data-theme="light">` → new light CSS variables override via `[data-theme="light"]` block
- Default: `dark` (preserves current behavior with zero regressions)
- User preference saved to `localStorage`; system `prefers-color-scheme` respected on first visit

### Semantic alias tokens

Instead of scattering `dark:` conditionals across components, we'll introduce **semantic alias CSS variables** that change meaning per theme. Components will reference these aliases rather than raw color tokens.

```
--color-bg-primary     (maps to deep-forest in dark, cream in light)
--color-bg-secondary   (maps to mid-forest in dark, parchment in light)
--color-text-primary   (white in dark, forest in light)
--color-text-muted     (white/50 in dark, forest/50 in light)
--color-border         (white/5 in dark, forest/8 in light)
--color-surface        (white/3 in dark, forest/4 in light)
--color-surface-hover  (white/6 in dark, forest/6 in light)
--color-hero-overlay   (deep-forest in dark, cream in light)
```

All existing `bg-deep-forest`, `text-white`, etc. references in components will be updated to use the semantic aliases via Tailwind CSS arbitrary values (`bg-[var(--color-bg-primary)]`) or new Tailwind theme tokens.

---

## Proposed Changes

### `app/globals.css`
**[MODIFY]** [globals.css](file:///c:/Users/yeabs/Downloads/hero-section-build/app/globals.css)
- Add semantic alias CSS variables to `:root` (dark defaults)
- Add `[data-theme="light"]` block that remaps semantic aliases to light values
- Update `body` background/color to use semantic variables
- Update scrollbar, selection colors to use semantic variables
- Update `grid-bg`, `glow-border` utilities to use semantic tokens

---

### `app/layout.tsx`
**[MODIFY]** [layout.tsx](file:///c:/Users/yeabs/Downloads/hero-section-build/app/layout.tsx)
- Add `data-theme="dark"` default to `<html>` element
- Inline theme-init script (alongside existing attribute-cleaner script) to read `localStorage` and apply `data-theme` before first paint — prevents flash of wrong theme

---

### `components/nav/index.tsx`
**[MODIFY]** [nav/index.tsx](file:///c:/Users/yeabs/Downloads/hero-section-build/components/nav/index.tsx)
- Add **theme toggle button** (sun/moon icon) in the right action area
- Replace hardcoded `bg-deep-forest`, `text-white`, `border-white/…` with semantic CSS variable classes
- Mobile overlay menu gets light-theme-compatible surfaces

---

### `components/hero/index.tsx`
**[MODIFY]** [hero/index.tsx](file:///c:/Users/yeabs/Downloads/hero-section-build/components/hero/index.tsx)
- Replace `bg-deep-forest` with `bg-[var(--color-bg-primary)]`
- Update cinematic overlay gradient references to use `--color-hero-overlay-rgb`
- Slide indicator dots: inactive state uses semantic muted color

### `components/hero/hero-content.tsx`
**[MODIFY]** [hero-content.tsx](file:///c:/Users/yeabs/Downloads/hero-section-build/components/hero/hero-content.tsx)
- `text-white` → semantic text token
- `text-white/65` → `text-[var(--color-text-muted)]`
- Button borders use semantic border token

### `components/hero/stats-section.tsx` & `education-badge.tsx`
**[MODIFY]** as needed for text and border colors

---

### All section components (`about`, `what-we-do`, `approach`, `goals`, `impact`, `get-involved`)
**[MODIFY]** each index.tsx:
- `bg-mid-forest` / `bg-deep-forest` → `bg-[var(--color-bg-secondary)]` / `bg-[var(--color-bg-primary)]`
- `text-white` → `text-[var(--color-text-primary)]`
- `text-white/40`, `text-white/60`, etc. → CSS variable equivalents
- `border-white/5` → `border-[var(--color-border)]`
- `bg-white/3`, `bg-white/5` → `bg-[var(--color-surface)]`
- Floating cards (About mission card, etc.) get `bg-[var(--color-bg-primary)]`
- Footer in GetInvolved gets semantic bg

---

## Verification Plan

### Build check
```bash
pnpm run build
```
Must compile with 0 errors.

### Manual visual check
1. Open `localhost:3000` → confirm dark theme looks identical to current
2. Click the theme toggle → confirm light theme loads correctly across all sections
3. Reload page → confirm theme persists from `localStorage`
4. Check all interactive elements (hover states, active nav links, card glows) look correct in both themes

---

## Open Questions

> [!IMPORTANT]
> **Toggle placement**: The theme toggle button will be placed next to the "Donate Now" button in the nav. Is that placement OK, or would you prefer it elsewhere (e.g., bottom corner)?

> [!NOTE]
> **Light hero images**: The hero background photos are dark/moody. In light mode they'll still look fine since the cinematic overlay adapts — but the overlay direction will be adjusted to use the cream color instead of deep-forest, creating a warm "morning light" feel. Let me know if you'd like a different approach.

## Continuation — preservation guarantee and next steps

- **Preservation guarantee:** The existing site is left entirely unchanged and will be used exactly as the `dark` theme. No CSS, markup, or behavior that currently implements the dark appearance will be removed or modified in a way that changes its look or runtime behavior when `data-theme="dark"` is present. All light-theme work is additive and scoped under `[data-theme="light"]` and new semantic aliases.

- **High-level next steps (what I'll implement):**
	- Add semantic CSS alias variables to `:root` (dark defaults) and a `[data-theme="light"]` remap block.
	- Add an inline theme-init script in `app/layout.tsx` to set `data-theme` from `localStorage` (default `dark`) before first paint.
	- Add a theme toggle button to the nav that flips `data-theme` and persists preference to `localStorage`.
	- Replace hardcoded color utilities with semantic references (`bg-[var(--color-bg-primary)]`, `text-[var(--color-text-primary)]`, etc.) progressively across hero and section components.
	- Update utility CSS (scrollbar, selection, glows) to reference semantic tokens so they adapt per theme.
	- Run `pnpm run build` and manual visual QA, ensuring the `dark` appearance is pixel-identical to the current site.

- **Audit checklist to ensure no regressions to dark theme:**
	- Keep `:root` tokens matching current dark values (no change to these defaults).
	- All component changes will reference alias tokens; any direct `text-white`/`bg-deep-forest` usages will be switched only to alias references that map to the original dark tokens by default.
	- Run the site in `data-theme="dark"` and compare against current baseline before merging.

If you'd like, I can start implementing these changes now (I will first add the CSS aliases and the theme-init script). Do you want me to begin?
