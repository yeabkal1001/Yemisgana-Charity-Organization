## 2025-07-05 - Missing Interactive Focus States on Buttons and Links
**Learning:** Generic buttons styled with custom classes (like `.btn-primary` and `.btn-ghost`) and dynamically rendered link arrays often miss dedicated keyboard focus states, falling back to inconsistent browser defaults which violate accessibility guidelines.
**Action:** When adding global CSS button styles or mapping icon link arrays, always include `focus-visible` pseudo-classes to display clear, high-contrast outlines matching the site's design system tokens.
