## 2024-05-18 - Avoid exact string matching on tailwind class lists
**Learning:** Using `expect(classes).not.toContain("hidden")` can cause false positives because "lg:hidden" contains "hidden".
**Action:** Use `.split(' ')` first: `expect(classes.split(' ')).not.toContain('hidden')`.
