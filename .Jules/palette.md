## 2026-08-13 - Fix Social Media Icons Accessibility
**Learning:** Inline styles on elements mapping map items can override Tailwind hover and focus states. Mapping items to objects with explicit names allows assigning proper aria-labels to the links.
**Action:** Replaced inline styles with Tailwind equivalent utility classes and used an array of objects to map Icon components to their respective aria-label names.
