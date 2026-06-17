## 2026-06-17 - Interactive Cards Require Keyboard Handlers
**Learning:** Relying solely on 'onMouseEnter/onMouseLeave' for animated reveal cards prevents keyboard users from accessing crucial information (like the 'Explore Impact' link) and trigger states.
**Action:** Always pair hover state handlers with 'onFocus/onBlur' and ensure the container has 'tabIndex={0}', clear 'focus-visible' styles, and semantic roles (like 'role="article"').
