## 2024-05-24 - Global focus-visible implementation for keyboard accessibility
**Learning:** Adding `focus-visible` utility classes individually to every single interactive component can be tedious and prone to missing elements, especially in a large existing codebase.
**Action:** Implementing a global `:focus-visible` rule in `app/globals.css` utilizing design tokens like `var(--color-lime)` ensures robust keyboard accessibility out-of-the-box for all interactive elements, without degrading the experience for mouse users (unlike `:focus`).
