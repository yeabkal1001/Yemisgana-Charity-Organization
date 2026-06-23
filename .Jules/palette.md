## 2024-05-24 - Dynamic Icon List Accessibility
**Learning:** When mapping over icon components for interactive links (e.g., social media icons), missing explicit string labels often results in screen-reader unfriendliness, and simple `hover` states do not provide sufficient keyboard accessibility.
**Action:** Always structure the mapping data to include explicit `label` strings to feed to `aria-label` attributes, and ensure `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime` (or similar brand color) styles are included for robust keyboard navigation feedback.
