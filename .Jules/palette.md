## 2024-07-16 - Social Media Icons Accessibility Map Pattern
**Learning:** When using `.map()` for iterating over icon components to create interactive links (like social media links), the data structure often lacks the string metadata needed for proper accessibility labels.
**Action:** When mapping over icon components, structure the data as objects to explicitly include string labels alongside the component (e.g., `[{ Icon: Facebook, label: 'Facebook' }]`) so that `aria-label`s can be dynamically applied to the link, and add explicit `focus-visible` ring styles for keyboard navigation.
