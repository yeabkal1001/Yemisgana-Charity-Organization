## 2025-07-15 - Improve Accessibility of Social Links
**Learning:** When mapping over icon components for interactive links (e.g., social media icons), it's important to provide an explicit `aria-label` for screen readers because the icons themselves do not convey text information. Also adding focus-visible rings is necessary for keyboard navigation accessibility.
**Action:** Always structure icon link data to include explicit label strings for `aria-label` attributes, add `aria-hidden='true'` to the decorative SVG inside, and include explicit focus-visible styles in the `className`.
