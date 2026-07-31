## 2023-11-02 - Keyboard focus accessibility for interactive Framer Motion cards
**Learning:** When making non-button elements (like `div` or `motion.div`) interactive and hoverable, ensure they have `tabIndex={0}`, focus event handlers mapped to the same state as hover, and `focus-visible` styles for keyboard accessibility.
**Action:** Always add keyboard event handlers (like `onKeyDown` to prevent default scroll) and explicit `focus-visible:ring-*` classes when converting a div into an interactive card component.
