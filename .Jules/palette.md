## 2024-06-23 - Interactive Element Focus States
**Learning:** Icon-only links and buttons frequently lack explicit focus styles and screen reader labels. Without `focus-visible` styles, keyboard users cannot easily navigate through standard anchor tags functioning as interactive buttons.
**Action:** Always add explicit `focus-visible` styles (like `focus-visible:ring-2` with ring offsets) and `aria-label` attributes to mapping logic for interactive icon links.
