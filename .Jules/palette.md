## 2024-05-18 - Missing Group Classes Block Nested Hover States
**Learning:** Tailwind's `group-hover` utilities on child elements (like icons within buttons) silently fail if the parent container is missing the `group` class. This was observed on the `btn-ghost` "Watch Our Story" button where the play icon hover state was broken.
**Action:** When debugging broken nested hover states (especially in shared components or global utility classes), always verify the parent element explicitly has the `group` class applied.
