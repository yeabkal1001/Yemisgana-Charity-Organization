## 2024-08-14 - Social Icons Accessibility
**Learning:** Mapping over icon components directly for interactive elements often leads to accessibility gaps. It is crucial to structure the data array with explicit label properties (`[{ Icon, label }]`) to provide `aria-label` context for screen readers and `aria-hidden="true"` on the decorative SVG elements themselves.
**Action:** Always verify that mapped interactive icon elements include structured label data and explicit keyboard focus indicators (e.g., `focus-visible:ring-2`).
