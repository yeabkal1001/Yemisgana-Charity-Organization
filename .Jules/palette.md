## 2026-07-23 - Focus States for Global Classes
**Learning:** Global interactive elements using custom utility classes (like .btn-primary) must explicitly implement :focus-visible rules with CSS variables since they don't inherit Tailwind's utility class pseudo-states automatically.
**Action:** Add :focus-visible box-shadow patterns mirroring Tailwind's ring offset explicitly to custom button definitions.
