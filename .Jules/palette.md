## 2025-02-23 - Added ARIA labels and focus styles for get-involved social icons
**Learning:** Icon-only interactive links mapped from an array need explicit explicit label strings defined alongside their components to properly hydrate `aria-label`. Without this, screen readers only see empty links.
**Action:** Always structure mapping data for icons (e.g. social media) to include string labels. Add existing `focus-visible` ring styling to maintain visual accessibility for keyboard users while keeping custom mouse hover styling.
