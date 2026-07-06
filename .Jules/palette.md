## 2026-06-27 - Social Media Accessible Focus

**Learning:** When making map-generated link lists accessible, such as icon-only social media links, relying only on default browser focus outlines often leads to unpolished or invisible states due to generic Tailwind utility classes. Explicit `focus-visible` styles coupled with `aria-label` tags ensure keyboard accessibility and screen reader support without breaking the visual aesthetic.

**Action:** Always include an explicit label string in data arrays used for icon maps, and define a consistent `focus-visible` outline using ring utilities (e.g. `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bg-primary)] focus-visible:ring-offset-2`) that respect the design tokens for active interactions.