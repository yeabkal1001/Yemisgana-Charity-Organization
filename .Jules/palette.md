
## 2026-06-24 - Added keyboard focus states to buttons
**Learning:** Found that most icon and icon-plus-text buttons across the site lacked focus-visible states, making keyboard navigation difficult. Using Tailwind's focus-visible utility allows focus rings to display only during keyboard navigation, ensuring accessibility without breaking the visual design on click.
**Action:** When adding new buttons, interactive SVG wrappers, or clickable elements, always include focus-visible:ring-2 along with offset and color utilities to make sure users relying on a keyboard know which element has focus.
