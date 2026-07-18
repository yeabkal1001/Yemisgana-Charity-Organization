## 2024-07-18 - Social Media Icons Accessibility
**Learning:** Icon-only interactive links mapped from an array need explicit data structures containing a label string to ensure they have an `aria-label` attribute, preventing screen readers from announcing redundant/missing information.
**Action:** When creating icon-only interactive elements using `.map()`, ensure the source data array includes a descriptive label property to populate the `aria-label` attribute, and apply `aria-hidden="true"` to the inner decorative icon component.
