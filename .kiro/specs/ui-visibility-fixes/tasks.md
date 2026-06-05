# Implementation Plan

## Bug 1: Text Readability on Image Cards

- [x] 1. Write bug condition exploration test for image card hover
  - **Property 1: Bug Condition** - Text Readability Without Backdrop Blur
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate insufficient text contrast on hover
  - **Scoped PBT Approach**: Test all three pillar cards in the "What We Do" section
  - Test that when hovering over any card, the background image container lacks backdrop-blur effect
  - Test that text readability is compromised when card is hovered (no visual separation between text and image)
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves the bug exists)
  - Document counterexamples found: which cards have insufficient contrast, what image areas cause readability issues
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 1.1, 2.1_

- [x] 2. Write preservation property tests for image cards (BEFORE implementing fix)
  - **Property 2: Preservation** - Non-Hover Card Behavior
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-hover states
  - Verify cards display without blur effect when not hovered
  - Verify existing scale transformation (scale-105) is present on hover
  - Verify gradient overlay (bg-gradient-to-b with pillar.color) transitions on hover
  - Verify card content layout (number, icon, tag, title, description, CTA) is unchanged
  - Write property-based tests capturing observed behavior patterns
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 3. Fix image card text readability

  - [x] 3.1 Implement backdrop blur effect on hover
    - Add new absolutely positioned div as sibling to Image component in background container
    - Apply `backdrop-blur-sm` or `backdrop-blur-md` class to the new div
    - Add `opacity-0 group-hover:opacity-100` for smooth transition
    - Add `transition-opacity duration-700` to match existing animation timing
    - Ensure z-index layering: blur layer above image, below gradient overlay
    - Position: after Image component, before gradient overlay div (lines 131-136 in components/what-we-do/index.tsx)
    - _Bug_Condition: isBugCondition_Bug1(input) where input.isHovering = true AND hasBackgroundImage(input.cardElement) AND NOT hasBackdropBlur(input.cardElement)_
    - _Expected_Behavior: hasBackdropBlur(card.backgroundImage) AND textIsReadable(card.textContent, card.backgroundImage)_
    - _Preservation: Non-hover states display without blur; scale transformation, gradient overlay, content layout, and animations remain unchanged_
    - _Requirements: 1.1, 2.1, 3.1, 3.2, 3.3_

  - [x] 3.2 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Text Readability With Backdrop Blur
    - **IMPORTANT**: Re-run the SAME test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 1
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed - backdrop blur creates sufficient text contrast)
    - _Requirements: 2.1_

  - [x] 3.3 Verify preservation tests still pass
    - **Property 2: Preservation** - Non-Hover Card Behavior Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation property tests from step 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions - non-hover states, animations, and layout preserved)

- [x] 4. Checkpoint - Ensure image card tests pass
  - Ensure all tests for Bug 1 pass, ask the user if questions arise

## Bug 2: Hamburger Menu Visibility

- [x] 5. Write bug condition exploration test for hamburger menu visibility
  - **Property 1: Bug Condition** - Hamburger Button Visible on Desktop
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate hamburger button visibility at desktop breakpoints
  - **Scoped PBT Approach**: Test at exact lg breakpoint (1024px) and above (1280px, 1440px, 1920px)
  - Test that hamburger menu button is visible when viewportWidth >= 1024px
  - Test that desktop navigation links are also visible at same viewport widths
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves hamburger button is visible when it shouldn't be)
  - Document counterexamples found: which viewport widths show the bug
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 1.2, 2.2_

- [x] 6. Write preservation property tests for navigation (BEFORE implementing fix)
  - **Property 2: Preservation** - Mobile Navigation Behavior
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for mobile/tablet viewports (below 1024px)
  - Verify hamburger button is visible and functional at viewport widths: 320px, 480px, 768px, 1023px
  - Verify clicking hamburger button opens full-screen overlay menu
  - Verify desktop navigation links are hidden on mobile/tablet
  - Write property-based tests capturing observed behavior patterns
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.4, 3.5, 3.6_

- [~] 7. Fix hamburger menu visibility on desktop

  - [ ] 7.1 Implement responsive display class
    - Add `lg:hidden` class to hamburger menu button className
    - Location: line 226 in components/nav/index.tsx
    - The button should remain visible on mobile/tablet (below lg breakpoint)
    - The button should be hidden on desktop/large screens (lg breakpoint and above)
    - _Bug_Condition: isBugCondition_Bug2(input) where input.viewportWidth >= 1024 AND input.hamburgerButton.isVisible = true_
    - _Expected_Behavior: hamburgerButton.isVisible = false when viewportWidth >= 1024_
    - _Preservation: Hamburger button continues to display and function on mobile/tablet; desktop navigation links unchanged_
    - _Requirements: 1.2, 2.2, 3.4, 3.5, 3.6_

  - [~] 7.2 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Hamburger Button Hidden on Desktop
    - **IMPORTANT**: Re-run the SAME test from task 5 - do NOT write a new test
    - The test from task 5 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 5
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed - hamburger button hidden at desktop breakpoints)
    - _Requirements: 2.2_

  - [~] 7.3 Verify preservation tests still pass
    - **Property 2: Preservation** - Mobile Navigation Behavior Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 6 - do NOT write new tests
    - Run preservation property tests from step 6
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions - mobile navigation behavior preserved)

- [~] 8. Checkpoint - Ensure navigation tests pass
  - Ensure all tests for Bug 2 pass, ask the user if questions arise

## Bug 3: Navigation Text in Light Mode

- [~] 9. Write bug condition exploration test for light mode menu text
  - **Property 1: Bug Condition** - Light Mode Menu Text Invisible
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate insufficient text contrast in light mode menu
  - **Scoped PBT Approach**: Test light theme with menu open state
  - Test that when menuOpen = true AND theme = 'light', navigation link text uses theme-variable colors (text-[var(--color-text-muted)])
  - Test that text contrast against dark overlay background (rgba(var(--color-deep-forest-rgb),0.98)) is insufficient
  - Test that in dark mode, the same menu has sufficient contrast (baseline comparison)
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves light mode text is not visible)
  - Document counterexamples found: specific text color values, contrast ratios
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 1.3, 2.3_

- [~] 10. Write preservation property tests for menu overlay (BEFORE implementing fix)
  - **Property 2: Preservation** - Dark Mode Menu Appearance
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for dark mode menu
  - Verify navigation link text is visible and readable in dark mode
  - Verify menu animations (open/close) are unchanged
  - Verify menu layout, spacing, and typography are unchanged
  - Verify footer, logo, and close button styling are unchanged
  - Verify active section highlighting works in dark mode
  - Write property-based tests capturing observed behavior patterns
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.7, 3.8, 3.9, 3.10_

- [~] 11. Fix navigation text visibility in light mode

  - [~] 11.1 Implement forced light text color for menu overlay
    - Replace theme-sensitive text color with forced light text for navigation links
    - Location: line 294 in components/nav/index.tsx
    - Change `text-[var(--color-text-muted)]` to `text-white/60` in non-active state
    - Keep active state `text-lime` unchanged
    - Keep hover state `hover:text-lime-light` unchanged
    - Update menu index numbers (line 296) from `var(--color-text-muted)` to fixed light color if needed
    - Update footer text (line 317) to `text-white/60` for consistency
    - This ensures light text on dark overlay background regardless of theme
    - _Bug_Condition: isBugCondition_Bug3(input) where input.menuOpen = true AND input.theme = 'light' AND input.navLinks.textColor = 'var(--color-text-muted)'_
    - _Expected_Behavior: navLinks.areVisible = true AND navLinks.textContrast >= WCAG_AA_STANDARD_
    - _Preservation: Dark mode menu styling unchanged; menu animations, layout, and active section highlighting preserved_
    - _Requirements: 1.3, 2.3, 3.7, 3.8, 3.9, 3.10_

  - [~] 11.2 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Light Mode Menu Text Visible
    - **IMPORTANT**: Re-run the SAME test from task 9 - do NOT write a new test
    - The test from task 9 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 9
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed - text visible in light mode menu)
    - _Requirements: 2.3_

  - [~] 11.3 Verify preservation tests still pass
    - **Property 2: Preservation** - Dark Mode Menu Appearance Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 10 - do NOT write new tests
    - Run preservation property tests from step 10
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions - dark mode menu styling preserved)

- [~] 12. Checkpoint - Ensure menu overlay tests pass
  - Ensure all tests for Bug 3 pass, ask the user if questions arise

## Final Verification

- [~] 13. Run full test suite and verify all fixes
  - Run all property-based tests for all three bugs
  - Verify all bug condition tests pass (bugs are fixed)
  - Verify all preservation tests pass (no regressions)
  - Perform manual visual testing across viewport sizes and themes
  - Test accessibility with keyboard navigation and screen readers
  - Verify WCAG AA contrast standards are met
