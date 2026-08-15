
## 2023-10-25 - Global Keyboard Accessibility
**Learning:** Using a global `:focus-visible` ring on `*` bounded to brand variables is a scalable method for improving keyboard accessibility without conflicting with Tailwind hover states or mouse interactions.
**Action:** Default to implementing global `:focus-visible` using design tokens (`var(--color-lime)`) instead of manual utility classes on every single interactive element.
