## 2026-07-24 - Fix Tailwind group-hover on child elements
**Learning:** Using Tailwind's `group-hover` utility classes on child elements (like changing border or text colors on hover) requires explicitly applying the `group` class to the parent element, otherwise the hover states will fail silently. Also, always ensure decorative icons have `aria-hidden='true'` inside interactive elements.
**Action:** Always verify the parent element has the `group` class when using `group-hover` utilities on children, and audit interactive icon wrappers for `aria-hidden` during UX reviews.
