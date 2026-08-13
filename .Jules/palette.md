## 2025-02-14 - Missing Group Hover Parent Classes
**Learning:** When using Tailwind's `group-hover` utility classes on child elements (like icons within buttons), the parent element must explicitly have the `group` class applied. Otherwise, the hover state on the children will not trigger when the parent is hovered.
**Action:** Always verify that interactive parent elements have the `group` class when their children rely on `group-hover` utilities.
