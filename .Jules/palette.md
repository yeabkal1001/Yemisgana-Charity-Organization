
## 2024-05-18 - Added keyboard focus visible styles to global buttons
**Learning:** Global button classes (.btn-primary, .btn-ghost) in CSS relied heavily on hover states and box-shadows but lacked explicit `focus-visible` styling, making keyboard navigation inaccessible. Similarly, inline decorative icons inside buttons required `aria-hidden="true"` to hide from screen readers when the parent already provides context or adjacent text (like "Watch Our Story").
**Action:** Added `.btn-primary:focus-visible` and `.btn-ghost:focus-visible` using design system colors in `app/globals.css`. Added `group` class to `.btn-ghost` and `aria-hidden="true"` to its inner `<Play>` icon in the Hero component.
