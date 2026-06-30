## 2024-06-30 - Refactoring Vitest Tailwind Class Assertions
**Learning:** When testing for the absence of specific Tailwind utility classes like `hidden`, using `.toContain("hidden")` on the entire className string causes false test failures because it matches substrings like `lg:hidden`.
**Action:** Always split the `className` string into an array (e.g., `classes.split(" ")`) and test against the array when checking for the presence or absence of exact Tailwind class names.
