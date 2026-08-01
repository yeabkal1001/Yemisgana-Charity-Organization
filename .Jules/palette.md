## 2024-05-18 - Missing ARIA Labels on Buttons with inner SVGs
**Learning:** Adding ARIA labels to buttons containing inner SVGs or icon-only elements is crucial for screen readers. Using `aria-hidden="true"` on the inner SVG avoids redundant reading of both the text label and the inner SVG.
**Action:** Apply `aria-label` to the parent button component, and `aria-hidden="true"` to the inner SVG.
