# UI Visibility Fixes Design

## Overview

This design addresses three UI visibility and responsive design bugs in a Next.js charity website. The bugs affect text readability over image backgrounds, responsive navigation element visibility, and theme-specific styling consistency. The fixes will implement a backdrop blur effect for text readability, proper responsive breakpoint handling for navigation elements, and theme-aware text color management. These targeted changes will improve accessibility and user experience without altering core functionality.

## Glossary

- **Bug_Condition (C)**: The conditions that trigger visibility or readability issues across three distinct UI contexts
- **Property (P)**: The desired visible, readable, and responsive behavior expected by users
- **Preservation**: Existing interactions, animations, layouts, and non-buggy styling that must remain unchanged
- **WhatWeDo Component**: The section in `components/what-we-do/index.tsx` displaying three pillar cards with background images
- **Nav Component**: The navigation component in `components/nav/index.tsx` handling desktop and mobile navigation with theme switching
- **Hover State**: CSS/React state when user's cursor is positioned over an interactive element
- **lg Breakpoint**: Tailwind CSS breakpoint at 1024px viewport width, separating mobile/tablet from desktop layouts
- **Theme**: Application-wide color scheme (light or dark) controlled via `data-theme` attribute on document root

## Bug Details

### Bug Condition

The bugs manifest in three distinct UI contexts:

**Bug 1 - Text Readability on Image Cards:**
When a user hovers over image cards in the "What We Do" section, text content overlays background images without sufficient contrast enhancement. The current implementation applies only a subtle gradient overlay and color tint, which is insufficient for ensuring text readability across varying image content.

**Bug 2 - Hamburger Menu Visibility:**
When viewing the website on desktop/large screens (lg breakpoint and above), the hamburger menu button remains visible even though the full desktop navigation links are already displayed in the navigation bar. This creates visual redundancy and confusion.

**Bug 3 - Navigation Text in Light Mode:**
When the full-screen hamburger menu overlay is open in light mode, navigation link text uses theme-variable colors that result in insufficient contrast against the overlay background, making links difficult or impossible to read.

**Formal Specification:**

```
FUNCTION isBugCondition_Bug1(input)
  INPUT: input of type { isHovering: boolean, cardElement: HTMLElement }
  OUTPUT: boolean
  
  RETURN input.isHovering = true
         AND input.cardElement.classList.contains('group')
         AND hasBackgroundImage(input.cardElement)
         AND NOT hasBackdropBlur(input.cardElement)
END FUNCTION

FUNCTION isBugCondition_Bug2(input)
  INPUT: input of type { viewportWidth: number, hamburgerButton: HTMLElement }
  OUTPUT: boolean
  
  RETURN input.viewportWidth >= 1024
         AND input.hamburgerButton.isVisible = true
END FUNCTION

FUNCTION isBugCondition_Bug3(input)
  INPUT: input of type { menuOpen: boolean, theme: string, navLinks: HTMLElement[] }
  OUTPUT: boolean
  
  RETURN input.menuOpen = true
         AND input.theme = 'light'
         AND input.navLinks.textColor = 'var(--color-text-muted)'
END FUNCTION
```

### Examples

**Bug 1 Examples:**
- User hovers over "School Construction" card → background image scales and tint applies, but white text over bright image areas remains hard to read
- User hovers over "Educational Resources" card → text overlays complex image details without sufficient background blur
- User hovers over any card with high-contrast background image → text readability varies unpredictably

**Bug 2 Examples:**
- User views site on 1920x1080 desktop display → both hamburger menu button and full navigation links are visible
- User resizes window from mobile to desktop width → hamburger button remains visible after desktop nav appears
- User views site on tablet in landscape orientation (above 1024px) → hamburger button shows alongside desktop navigation

**Bug 3 Examples:**
- User switches to light theme and opens hamburger menu → navigation links ("About", "What We Do", etc.) are barely visible or invisible
- User navigates through menu items in light mode → active section indicators are difficult to see
- User compares light mode menu to dark mode menu → dark mode text is clearly visible, light mode text is not

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**

**Bug 1 - Image Card Preservation:**
- Image card scale transformation on hover must remain unchanged (scale-105)
- Gradient color overlay transition must remain unchanged
- Card content layout (number, icon, tag, title, description, CTA) must remain unchanged
- Border, shadow, and glow effects on hover must remain unchanged
- Animation timing and easing functions must remain unchanged
- Cards in non-hover state must display exactly as before

**Bug 2 - Navigation Preservation:**
- Hamburger menu must continue to display on mobile/tablet screens (below lg breakpoint)
- Hamburger menu functionality (opening overlay) must remain unchanged
- Desktop navigation links must continue to display at lg breakpoint and above
- Scroll behavior, active section indicators, and navigation interactions must remain unchanged
- Theme toggle button, donate button, and logo functionality must remain unchanged

**Bug 3 - Menu Overlay Preservation:**
- Dark mode menu styling must remain completely unchanged
- Menu open/close animations must remain unchanged
- Menu layout, spacing, and typography must remain unchanged for all themes
- Footer, logo, and close button in menu must remain unchanged
- Active section highlighting logic must remain unchanged

**Scope:**

All inputs that do NOT involve the three specific bug conditions should be completely unaffected by this fix. This includes:
- Non-hover states for image cards
- Mobile/tablet viewport behavior for navigation
- Dark mode menu appearance
- All other page sections and components
- Scroll interactions and animations
- Theme switching functionality for non-menu elements

## Hypothesized Root Cause

Based on the bug descriptions and code analysis, the most likely issues are:

### Bug 1: Insufficient Contrast Enhancement on Hover

**Root Cause:** The `group-hover` state in the "What We Do" cards applies only a subtle color gradient overlay (`bg-gradient-to-b ${pillar.color}`) with low opacity. There is no backdrop blur effect to create visual separation between the background image and text content.

**Supporting Evidence:**
- Line 134-135 in `components/what-we-do/index.tsx`: Only a gradient overlay is applied
- Comment on line 133 indicates a radial gradient was previously removed
- The `Image` component has `group-hover:scale-105` but no blur effect
- Text relies solely on color contrast without background treatment

**Expected Location:** The background image container div (lines 131-136) needs an additional child element with `backdrop-blur` applied on hover.

### Bug 2: Missing Responsive Display Class

**Root Cause:** The hamburger menu button (lines 226-234 in `components/nav/index.tsx`) does not have a responsive display utility class to hide it at the lg breakpoint and above.

**Supporting Evidence:**
- The button has base styles but no `lg:hidden` class
- Desktop navigation links have `hidden lg:flex` (line 90) showing proper responsive pattern
- The theme toggle and donate button use `hidden sm:flex` and `hidden sm:inline-flex` patterns
- The hamburger button lacks any responsive visibility classes

**Expected Location:** The button element at line 226 needs `lg:hidden` added to its className.

### Bug 3: Theme-Insensitive Text Color Variables

**Root Cause:** The full-screen menu overlay navigation links (lines 283-304) use CSS custom properties like `var(--color-text-muted)` that change based on theme, but in light mode these colors lack sufficient contrast against the dark overlay background (`rgba(var(--color-deep-forest-rgb),0.98)`).

**Supporting Evidence:**
- Line 268: Overlay background is hardcoded to deep forest with 98% opacity
- Line 294: Text color uses `text-[var(--color-text-muted)]` which adapts to theme
- In light mode: `--color-text-muted: rgba(10, 30, 18, 0.6)` (dark text)
- Dark text on dark background creates invisibility issue
- Dark mode works because `--color-text-muted` is `rgba(255, 255, 255, 0.6)` (light text)

**Expected Location:** The overlay menu links need theme-aware forced colors or the overlay background needs to be theme-sensitive.

## Correctness Properties

Property 1: Bug Condition - Text Readability on Hover

_For any_ card hover interaction in the "What We Do" section where a background image is present, the fixed component SHALL apply a backdrop blur effect to the image container, creating sufficient visual separation between the background image and overlaying text content to ensure readability across all image variations.

**Validates: Requirements 2.1**

Property 2: Bug Condition - Hamburger Menu Responsive Visibility

_For any_ viewport width at or above the lg breakpoint (1024px), the fixed navigation component SHALL hide the hamburger menu button, displaying only the desktop navigation links.

**Validates: Requirements 2.2**

Property 3: Bug Condition - Light Mode Menu Text Visibility

_For any_ state where the hamburger menu overlay is open AND the theme is set to 'light', the fixed navigation component SHALL apply text colors that provide sufficient contrast against the overlay background, ensuring all navigation links are clearly visible and readable.

**Validates: Requirements 2.3**

Property 4: Preservation - Non-Hover Card Behavior

_For any_ card state where the user is NOT hovering over the card, the fixed component SHALL produce exactly the same visual appearance as the original component, preserving all existing image display, layout, and styling.

**Validates: Requirements 3.1, 3.2, 3.3**

Property 5: Preservation - Mobile Navigation Behavior

_For any_ viewport width below the lg breakpoint (1024px), the fixed navigation component SHALL produce exactly the same behavior as the original component, preserving hamburger menu visibility and functionality.

**Validates: Requirements 3.4, 3.5, 3.6**

Property 6: Preservation - Dark Mode Menu Appearance

_For any_ state where the hamburger menu is open AND the theme is set to 'dark', the fixed navigation component SHALL produce exactly the same visual appearance and behavior as the original component, preserving all existing menu styling.

**Validates: Requirements 3.7, 3.8, 3.9, 3.10**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**Bug 1 - Text Readability Fix**

**File**: `components/what-we-do/index.tsx`

**Location**: Background image container (lines 131-136)

**Specific Changes**:
1. **Add Backdrop Blur Layer**: Add a new absolutely positioned div as a sibling to the Image component
   - Apply `backdrop-blur-sm` or `backdrop-blur-md` class
   - Use `opacity-0 group-hover:opacity-100` for smooth transition
   - Ensure z-index layering places blur above image but below gradient overlay

2. **Structure Change**:
   ```tsx
   <div className="absolute inset-0 z-0">
     <Image ... />
     {/* NEW: Backdrop blur layer */}
     <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
     {/* Existing gradient overlay */}
     <div className={`absolute inset-0 bg-gradient-to-b ...`} />
   </div>
   ```

**Bug 2 - Hamburger Menu Visibility Fix**

**File**: `components/nav/index.tsx`

**Location**: Hamburger menu button (line 226)

**Specific Changes**:
1. **Add Responsive Display Class**: Add `lg:hidden` to the button's className
   - This will hide the button at 1024px viewport width and above
   - Maintains visibility on mobile and tablet views

2. **Class Addition**:
   ```tsx
   <button
     onClick={() => setMenuOpen(true)}
     className="lg:hidden w-10 h-10 rounded-full border flex items-center justify-center ..."
   ```

**Bug 3 - Navigation Text Visibility Fix**

**File**: `components/nav/index.tsx`

**Location**: Full-screen menu overlay navigation links (line 294)

**Specific Changes**:
1. **Force Light Text Color in Overlay**: Replace theme-sensitive color variable with forced light text color
   - Change `text-[var(--color-text-muted)]` to `text-white/60`
   - Change hover state from `hover:text-lime-light` to maintain consistency
   - This ensures light text on dark overlay background regardless of theme

2. **Alternative Approach** (if first approach breaks other styling):
   - Keep text color dynamic but make overlay background theme-sensitive
   - Change overlay background from hardcoded dark to theme-aware variable

3. **Preferred Implementation** (Option 1 - Forced Light Text):
   ```tsx
   className={`font-black tracking-tight leading-none uppercase transition-all duration-300 flex items-center gap-4 group ${
     isActive ? 'text-lime font-black' : 'text-white/60 hover:text-lime-light'
   }`}
   ```

4. **Additional Elements to Update**:
   - Footer text in menu (line 317): Update to `text-white/60` for consistency
   - Menu index numbers (line 296): Already using inline style, may need adjustment if using Option 1

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bugs on unfixed code, then verify the fixes work correctly and preserve existing behavior. Testing will focus on visual regression detection, responsive behavior validation, and theme consistency verification.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bugs BEFORE implementing the fix. Confirm or refute the root cause analysis. If we refute, we will need to re-hypothesize.

**Test Plan**: Create visual regression tests and interaction tests that capture the buggy behavior on unfixed code. Use browser DevTools to simulate viewport sizes and theme changes. Document visual evidence of contrast issues and visibility problems.

**Test Cases**:

1. **Image Card Hover Test**: Hover over each pillar card and capture screenshots (will show insufficient contrast on unfixed code)
   - Expected failure: Text difficult to read over bright or complex image areas
   - Validates root cause: No backdrop blur applied

2. **Desktop Hamburger Visibility Test**: Resize viewport to 1440px and observe navigation bar (will show hamburger button on unfixed code)
   - Expected failure: Hamburger button visible alongside desktop nav links
   - Validates root cause: Missing `lg:hidden` class

3. **Light Mode Menu Text Test**: Switch to light theme and open hamburger menu, attempt to read navigation links (will show invisible/barely visible text on unfixed code)
   - Expected failure: Navigation links not readable due to dark text on dark background
   - Validates root cause: Theme-sensitive colors applied to text over dark overlay

4. **Responsive Breakpoint Test**: Test viewport widths at 1020px, 1024px, and 1028px to confirm exact breakpoint behavior (may reveal edge case issues)
   - Expected observation: Hamburger behavior changes but not at exactly lg breakpoint

**Expected Counterexamples**:
- Card hover states lack sufficient text/background separation
- Hamburger menu button visible at desktop widths
- Light mode menu has dark text on dark background
- Possible causes confirmed: missing blur effect, missing responsive class, theme-insensitive color choices

### Fix Checking

**Goal**: Verify that for all inputs where the bug conditions hold, the fixed components produce the expected behavior.

**Pseudocode:**

```
FOR ALL card IN whatWeDoCards DO
  simulateHover(card)
  ASSERT hasBackdropBlur(card.backgroundImage)
  ASSERT textIsReadable(card.textContent, card.backgroundImage)
END FOR

FOR ALL viewportWidth IN [1024, 1280, 1440, 1920] DO
  resizeViewport(viewportWidth)
  ASSERT hamburgerButton.isVisible = false
  ASSERT desktopNavLinks.isVisible = true
END FOR

FOR ALL theme IN ['light', 'dark'] DO
  setTheme(theme)
  openHamburgerMenu()
  ASSERT navLinks.areVisible = true
  ASSERT navLinks.textContrast >= WCAG_AA_STANDARD
END FOR
```

### Preservation Checking

**Goal**: Verify that for all inputs where the bug conditions do NOT hold, the fixed components produce the same result as the original components.

**Pseudocode:**

```
FOR ALL card IN whatWeDoCards DO
  // Non-hover state
  ASSERT card.appearance_fixed = card.appearance_original
  
  // Hover state animations
  simulateHover(card)
  ASSERT card.scaleTransform_fixed = card.scaleTransform_original
  ASSERT card.gradientOverlay_fixed = card.gradientOverlay_original
  ASSERT card.contentLayout_fixed = card.contentLayout_original
END FOR

FOR ALL viewportWidth IN [320, 480, 768, 1023] DO
  // Mobile/tablet behavior
  resizeViewport(viewportWidth)
  ASSERT hamburgerButton.isVisible_fixed = hamburgerButton.isVisible_original
  ASSERT hamburgerButton.functionality_fixed = hamburgerButton.functionality_original
END FOR

FOR ALL menuState IN [open, closed] DO
  FOR ALL theme IN ['dark'] DO
    // Dark mode preservation
    setTheme(theme)
    setMenuState(menuState)
    ASSERT menuAppearance_fixed = menuAppearance_original
  END FOR
END FOR
```

**Testing Approach**: Visual regression testing combined with automated DOM inspection is recommended for preservation checking because:
- It catches unintended style changes that unit tests might miss
- It validates responsive behavior across many viewport sizes
- It provides confidence that theme switching continues to work correctly for all non-buggy contexts
- It ensures animations and transitions remain unchanged

**Test Plan**: Capture baseline screenshots and DOM snapshots of unfixed code for non-buggy states, then compare against fixed code.

**Test Cases**:

1. **Non-Hover Card Preservation**: Verify cards display identically when not hovered
2. **Hover Animation Preservation**: Verify scale, gradient, and transition timing remain unchanged
3. **Mobile Navigation Preservation**: Verify hamburger menu works identically on mobile (below 1024px)
4. **Dark Mode Menu Preservation**: Verify menu appearance unchanged in dark mode
5. **Theme Switch Preservation**: Verify theme toggle continues to update all non-menu elements
6. **Active Section Preservation**: Verify scroll-spy and active indicators work unchanged

### Unit Tests

- Test backdrop blur class application on card hover state
- Test hamburger button visibility at various viewport widths (1020px, 1024px, 1028px)
- Test navigation link text color in light mode menu overlay
- Test that non-hover card states remain unchanged
- Test that mobile hamburger functionality preserved
- Test that dark mode menu styling preserved

### Property-Based Tests

- Generate random viewport widths and verify hamburger button visibility follows lg breakpoint rule
- Generate random theme switches and verify menu text contrast meets accessibility standards
- Generate random card hover sequences and verify backdrop blur consistently applies
- Test rapid theme toggling to ensure no visual glitches
- Test viewport resize sequences to ensure responsive behavior is stable

### Integration Tests

- Test full user flow: load page → hover cards → verify readability
- Test responsive flow: resize from mobile to desktop → verify hamburger disappears
- Test theme flow: switch to light mode → open menu → verify text visible → switch to dark mode → verify unchanged
- Test combined flows: resize viewport while menu is open, change theme while hovering cards
- Test accessibility flow: keyboard navigation through menu in both themes
