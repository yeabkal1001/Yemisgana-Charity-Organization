## 2025-02-23 - Global Focus Styles vs Tailwind Classes
**Learning:** Implementing a global `:focus-visible` rule in `globals.css` using design tokens is generally more robust and comprehensive than manually applying Tailwind `focus-visible:` utility classes to every single interactive component, even when strict guidelines prefer existing utility classes.
**Action:** Default to CSS-based global focus rules in layout resets rather than inline utility classes to guarantee site-wide keyboard accessibility coverage.
