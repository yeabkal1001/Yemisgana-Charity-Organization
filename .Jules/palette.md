## 2025-07-29 - Fixed False Positive Test Failure with Tailwind string matching
**Learning:** When using Vitest assertions for Tailwind classes, `expect(classes).not.toContain("hidden")` causes false positives because it matches substrings inside responsive classes like `lg:hidden`.
**Action:** Split the class string into an array (e.g., `classes.split(' ')`) and assert against the array instead of the raw string.
