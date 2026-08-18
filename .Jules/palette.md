## 2026-08-18 - Global Focus Visible
**Learning:** Implementing a global `:focus-visible` rule in `app/globals.css` using design tokens (e.g., `var(--color-lime)`) is generally more robust and comprehensive than manually applying Tailwind `focus-visible:` utility classes to every single interactive component, ensuring no element is missed.
**Action:** When working on new projects without existing global focus states, establish a global `:focus-visible` baseline in the CSS layer base before attempting component-level utility class fixes.
