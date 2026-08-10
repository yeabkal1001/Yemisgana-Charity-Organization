## 2024-05-30 - Focus visible accessibility
**Learning:** Adding a global `:focus-visible` outline is a highly effective way to ensure consistent keyboard accessibility across all interactive elements (buttons, links, form fields) without relying on custom classes per element. The `:focus-visible` pseudo-class ensures mouse and touch users do not see focus rings, while keyboard users do.
**Action:** Always add a global `:focus-visible` rule in the base CSS layer using design tokens.
