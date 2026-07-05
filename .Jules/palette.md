## 2024-07-05 - Accessibility for mapped icon links
**Learning:** When generating interactive elements from an array of icons (like social media links), the explicit labels required for `aria-label` are often omitted leading to screen reader inaccessibility.
**Action:** When mapping over icon components for interactive links, always structure the data to include explicit label strings for `aria-label` attributes and ensure `focus-visible` styles are included for keyboard accessibility.
