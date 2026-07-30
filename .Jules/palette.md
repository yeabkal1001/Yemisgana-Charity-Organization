## 2024-05-30 - Added ARIA labels and focus-visible states to footer social icons and links
**Learning:** When mapping over icon components for interactive links (e.g., social media icons), it's essential to structure the data to include explicit label strings for `aria-label` attributes and ensure explicit `focus-visible` ring styles are included for keyboard accessibility. Icon-only elements need `aria-label` on the wrapper and `aria-hidden='true'` on the SVG.
**Action:** Always ensure mapped icon components have dedicated label properties injected into the DOM for accessibility.
