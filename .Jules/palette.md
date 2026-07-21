
## 2024-07-21 - Vitest False Positives with Tailwind Classes
**Learning:** When using `expect(classes).not.toContain("hidden")` in Vitest to assert that an element is visible, it will falsely match on responsive or state-based Tailwind classes like `lg:hidden` or `group-hover:hidden`.
**Action:** When asserting the absence of a specific Tailwind class, always parse the class string into an array (e.g. `classes.split(' ')`) to ensure exact matches rather than substring matches.
