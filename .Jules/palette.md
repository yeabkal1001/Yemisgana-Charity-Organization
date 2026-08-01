## 2024-08-01 - Fix Watch Story Hover and Focus
**Learning:** Missing `group` classes on parent elements prevent child `group-hover` transitions from firing. Ensure parent buttons have `.group`.
**Action:** Always verify `group` class is present when adding child `group-hover` styles. Added keyboard focus outlines correctly.
