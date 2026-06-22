## 2024-05-15 - Explicit Labels and Focus Styles for Icon Loops

**Learning:** When dynamically mapping an array of icons (like social media links), relying on a simple component array e.g., `[Facebook, Twitter, Instagram]` strips critical screen-reader context if mapped into anchor tags, and removes focus rings.

**Action:** Always map over an array of objects structured with `{ Icon, label }`, applying `aria-label={label}` to the parent anchor tags. Also, ensure keyboard accessibility by appending `focus-visible:ring-2` to the elements' classes.
