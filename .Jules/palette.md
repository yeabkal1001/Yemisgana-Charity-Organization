## 2026-06-30 - Explicit Labels for Icon Arrays
**Learning:** When generating interactive elements from arrays of icon components, relying on inline text or implicitly inferred accessible names is insufficient. Screen readers need explicit `aria-label` attributes to interpret icon-only links properly.
**Action:** Always structure the data to include explicit label strings (e.g. `{ Icon, label }`) rather than just mapping over the icon components themselves, and bind these labels to the `aria-label` attribute on the parent interactive element.
