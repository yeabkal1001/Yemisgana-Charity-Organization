
## 2023-11-09 - Accessible Mapped Icons
**Learning:** When mapping over icon components for interactive links (e.g., social media icons), the lack of explicit text labels causes screen readers to skip them entirely. Additionally, relying exclusively on inline styles often masks missing focus indicators.
**Action:** Always structure the mapped data as an array of objects to include explicit label strings for `aria-label` attributes. Replace inline styles with standard utility classes to properly support `focus-visible` ring styles and hover states for comprehensive keyboard accessibility.
