
## 2025-10-26 - Inline Styles Blocking Tailwind Pseudoclasses
**Learning:** In the `GetInvolved` footer component, social media links used inline styles for base colors (`style={{ background: ..., border: ..., color: ... }}`). Because inline styles have higher CSS specificity, they silently block any Tailwind pseudoclass utilities (like `hover:text-lime` or `focus-visible:ring-...`) from taking effect, breaking hover and keyboard focus states.
**Action:** Always replace base inline styles on interactive elements with equivalent Tailwind utility classes (e.g., `bg-[var(--color-surface)]`) to ensure hover and `focus-visible` states function correctly.
