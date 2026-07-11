## 2024-07-11 - Test failures due to naive substring assertion
**Learning:** Vitest assertions for Tailwind classes like `expect(classes).not.toContain('hidden')` cause false positives when the element has a prefixed class like `lg:hidden`.
**Action:** When asserting that an element does not have a class, split the class string into an array and assert against the array (e.g. `expect(classes.split(' ')).not.toContain('hidden')`).
