## 2024-05-18 - Brittle Tailwind Class Test Assertions
**Learning:** Testing for exact tailwind classes like "hidden" using `.toContain("hidden")` or `.not.toContain("hidden")` on the raw `className` string is fragile and leads to false failures, as it matches substrings within responsive classes (like `lg:hidden`).
**Action:** When testing for the presence/absence of an exact utility class, always convert the `className` string into an array (e.g. `classes.split(" ")`) and assert against the array.
