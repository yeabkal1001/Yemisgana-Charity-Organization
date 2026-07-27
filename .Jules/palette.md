## 2024-05-24 - Accessible Social Links
**Learning:** Icon-only links mapped from an array of components often lose accessibility context, leaving screen readers with redundant or missing information.
**Action:** When mapping icons to create links, structure the array as objects containing both the component and a descriptive label to easily apply `aria-label` to the anchor and `aria-hidden="true"` to the icon.
