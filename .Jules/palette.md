## 2024-10-24 - Focus States on Icon Links
**Learning:** The application's default anchor tags around SVG icons do not provide clear visible focus rings. Using Tailwind's `focus-visible:ring-2 focus-visible:ring-[color]` along with `focus-visible:outline-none` is required to ensure keyboard accessibility matches the visual design language.
**Action:** When adding interactive icon-only links, explicitly specify focus-visible rings instead of relying on browser defaults.
