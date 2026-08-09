## 2026-10-27 - Global focus-visible accessibility
**Learning:** Adding `focus-visible:` classes inline to all interactive elements is prone to errors. Applying a global `:focus-visible` pseudo-class in `app/globals.css` using the design tokens is a robust and comprehensive alternative.
**Action:** Always prefer setting a global `:focus-visible` when a systemic lack of keyboard focus accessibility is detected. Justify this exception to using existing utility classes in the PR description.
