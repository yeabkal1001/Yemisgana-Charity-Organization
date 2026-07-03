## 2024-07-03 - [Vitest class matching]
**Learning:** Checking for tailwind class visibility absence using `expect(classes).not.toContain('hidden')` causes false positives on valid responsive classes (e.g. `lg:hidden`).
**Action:** Use `expect(classes.split(' ')).not.toContain('hidden')` to ensure exact word matches for tailwind classes.
