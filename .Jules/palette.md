## 2026-07-09 - Global Focus Styles
**Learning:** This app was completely missing global focus indicators, which made keyboard navigation effectively invisible and severely impacted accessibility for users navigating without a mouse. Relying entirely on hover states is an anti-pattern.
**Action:** Added global `:focus-visible` styles using the primary theme color (`--color-lime`) directly in `app/globals.css` base layer to ensure every interactive element naturally receives focus without needing manual Tailwind utility classes sprinkled everywhere.
## 2026-07-09 - Accessible Icon Maps
**Learning:** When mapping over generic icons to generate links (like social media links), the resulting links have no text content for screen readers, making them completely opaque to assistive technology.
**Action:** When creating icon links from a list, always structure the data to include explicit label strings `{ Icon, label }` so that each rendered `<a>` or `<button>` can be given an accurate `aria-label` attribute.
## 2026-07-09 - Vitest String Matching for Tailwind Classes
**Learning:** When asserting the absence of a Tailwind class (e.g. `lg:hidden`) using simple string matching like `expect(classes).not.toContain('hidden')`, the test fails if another class simply *contains* the word (e.g., `lg:hidden`), resulting in false positive test failures.
**Action:** When asserting Tailwind classes in vitest, always split the class string into an array (e.g., `classes.split(' ')`) and assert against the array rather than the raw string.
## 2024-05-30 - Visible Text vs ARIA Label Override
**Learning:** Overriding visible text inside a button with an `aria-label` (e.g., `<button aria-label="Watch our story"><span aria-hidden="true">Watch Story</span>...`) is an accessibility anti-pattern. Assistive technologies should natively read the visible text to establish the accessible name to comply with WCAG 2.5.3 (Label in Name) and support voice dictation users.
**Action:** When a button contains visible text, rely on that text for the accessible name and only apply `aria-hidden="true"` to purely decorative elements like icons or their wrappers, rather than silencing the entire button contents in favor of an `aria-label`.
