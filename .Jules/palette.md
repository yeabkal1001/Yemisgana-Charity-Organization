## 2024-06-11 - Add ARIA Labels and Focus States to Social Icons
**Learning:** Found social icons in the footer were using icon-only links without screen reader text or keyboard focus indicators. This pattern is common in footers and needs attention for accessibility and keyboard navigation.
**Action:** When adding icon-only links (like social media), always ensure they are wrapped with descriptive `aria-label`s and have visible focus states (`focus-visible`) defined to improve keyboard accessibility.
