## 2024-06-20 - Social Icon Arrays Require Explicit Accessibility Data
**Learning:** When mapping over icon components for social media links, omitting explicit labels results in empty `a` tags without `aria-label`s, causing major screen reader accessibility issues. Additionally, these dynamically mapped items often miss `focus-visible` styles necessary for keyboard navigation.
**Action:** When creating mapped icon components, always structure the data to include explicit label strings for `aria-label` attributes and ensure `focus-visible` styles are included for keyboard accessibility.
