## 2023-10-27 - Global focus-visible styling
**Learning:** Adding a global `*:focus-visible` rule in `app/globals.css` using CSS custom properties (`var(--color-lime)`) is a highly effective way to ensure consistent, accessible keyboard focus indicators across all interactive elements without polluting individual component styles with repetitive Tailwind utilities.
**Action:** Always prefer setting a global `:focus-visible` outline for keyboard accessibility over modifying each individual button, link, or input, provided it uses the design system's approved tokens.
