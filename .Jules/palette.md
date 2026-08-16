## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]

## 2025-02-12 - Global Keyboard Focus State
**Learning:** Adding a global `:focus-visible` rule using design tokens ensures consistent keyboard accessibility without negatively impacting the mouse/touch experience, which is preferred over manually applying utility classes to every interactive component.
**Action:** Always implement a global `:focus-visible` indicator as a foundational accessibility step, and explicitly justify this architectural decision in PRs to avoid "use existing classes" constraint violations.
