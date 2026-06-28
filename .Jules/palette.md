## 2026-06-28 - Component Testing with Tailwind classes
**Learning:** Using simple string inclusion tests like `.not.toContain('hidden')` is brittle when evaluating a list of Tailwind classes because it can create false positives (e.g. `lg:hidden` contains `hidden`).
**Action:** Use `.split(' ')` to check against the actual tokens in a className string to reliably verify visibility logic tests.

## 2026-06-28 - Focus visibility in Framer Motion components
**Learning:** When adding focus states across Next.js interactive elements inside Framer Motion trees, applying raw `focus-visible:ring-lime` classes relies on Tailwind resolving dynamic values correctly and ensuring parent components do not clip the outline.
**Action:** When working with customized tokens `--color-lime` and `--color-bg-primary`, explicitly specifying `focus-visible:ring-[var(--color-lime)]` or utilizing `box-shadow` rules provides better resilience in `globals.css` for generic component accessibility.
