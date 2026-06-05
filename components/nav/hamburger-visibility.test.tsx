/**
 * Bug Condition Exploration Test - Hamburger Menu Desktop Visibility
 * 
 * **Validates: Requirements 1.2, 2.2**
 * 
 * Property 1: Bug Condition - Hamburger Button Visible on Desktop
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists
 * DO NOT attempt to fix the test or the code when it fails
 * 
 * This test encodes the EXPECTED behavior:
 * - When viewport width >= 1024px (lg breakpoint), hamburger button SHOULD be hidden
 * - Desktop navigation links SHOULD be visible at these breakpoints
 * 
 * When this test FAILS on unfixed code, it proves the bug exists.
 * When this test PASSES after the fix, it confirms the bug is resolved.
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render } from '@testing-library/react';
import { fc, test } from '@fast-check/vitest';
import { Nav } from './index';

// Mock next/image to avoid Next.js image optimization in tests
vi.mock('next/image', () => ({
  default: ({ src, alt, className, style, priority, width, height }: any) => (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style}
      width={width}
      height={height}
    />
  ),
}));

describe('Bug Condition: Hamburger Menu Desktop Visibility', () => {
  describe('Property 1: Hamburger Button Hidden on Desktop (Expected Behavior)', () => {
    
    it('should hide hamburger button at exact lg breakpoint (1024px)', () => {
      // Simulate viewport at lg breakpoint
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
      
      const { container } = render(<Nav />);
      
      // Find the hamburger menu button
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Button should have lg:hidden class
      // This will FAIL on unfixed code (proving bug exists)
      const classes = hamburgerButton?.className || '';
      expect(classes).toContain('lg:hidden');
    });

    it('should hide hamburger button at 1280px (desktop width)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Button should have lg:hidden class
      const classes = hamburgerButton?.className || '';
      expect(classes).toContain('lg:hidden');
    });

    it('should hide hamburger button at 1440px (desktop width)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1440,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Button should have lg:hidden class
      const classes = hamburgerButton?.className || '';
      expect(classes).toContain('lg:hidden');
    });

    it('should hide hamburger button at 1920px (large desktop width)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Button should have lg:hidden class
      const classes = hamburgerButton?.className || '';
      expect(classes).toContain('lg:hidden');
    });

    // Property-based test: Hamburger should be hidden at all desktop widths
    test.prop([fc.integer({ min: 1024, max: 2560 })])(
      'hamburger button should have lg:hidden class at any desktop viewport width >= 1024px',
      (viewportWidth) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewportWidth,
        });
        
        const { container } = render(<Nav />);
        
        const hamburgerButton = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.getAttribute('aria-label') === 'Open menu');
        
        expect(hamburgerButton).toBeTruthy();
        
        // EXPECTED BEHAVIOR: Should have lg:hidden responsive class
        // COUNTEREXAMPLE on unfixed code: lg:hidden class is missing
        const classes = hamburgerButton?.className || '';
        expect(classes).toContain('lg:hidden');
      }
    );

    it('should show desktop navigation links at desktop breakpoints', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
      
      const { container } = render(<Nav />);
      
      // Find the desktop navigation container
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
      
      // Verify it contains navigation links
      const navLinks = desktopNav?.querySelectorAll('a');
      expect(navLinks?.length).toBe(5); // About, What We Do, Approach, Goals, Impact
      
      // EXPECTED BEHAVIOR: Desktop nav visible, hamburger hidden at desktop widths
      // On unfixed code: Both are visible (redundant UI elements)
    });

    it('should not have both hamburger and desktop nav visible simultaneously', () => {
      const desktopWidths = [1024, 1280, 1440, 1920];
      
      desktopWidths.forEach((width) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });
        
        const { container } = render(<Nav />);
        
        // Desktop nav should be visible (has hidden lg:flex classes)
        const desktopNav = container.querySelector('.hidden.lg\\:flex');
        expect(desktopNav).toBeTruthy();
        
        // Hamburger button should have lg:hidden class
        const hamburgerButton = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.getAttribute('aria-label') === 'Open menu');
        
        // EXPECTED BEHAVIOR: Hamburger has lg:hidden class
        // COUNTEREXAMPLE: Missing lg:hidden means both elements can be visible
        const classes = hamburgerButton?.className || '';
        expect(classes).toContain('lg:hidden');
      });
    });
  });

  describe('Counterexample Documentation', () => {
    it('documents which viewport widths show the hamburger button bug', () => {
      const testWidths = [1024, 1280, 1440, 1920];
      const widthsWithBug: number[] = [];
      
      testWidths.forEach((width) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });
        
        const { container } = render(<Nav />);
        
        const hamburgerButton = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.getAttribute('aria-label') === 'Open menu');
        
        const classes = hamburgerButton?.className || '';
        
        // Bug exists if lg:hidden is NOT present
        if (!classes.includes('lg:hidden')) {
          widthsWithBug.push(width);
        }
      });
      
      // On UNFIXED code, this will document all desktop widths with the bug
      // Expected: All widths will be listed (hamburger visible at all desktop sizes)
      console.log('Viewport widths where hamburger button is incorrectly visible:', widthsWithBug);
      console.log('Expected on unfixed code: [1024, 1280, 1440, 1920]');
      console.log('Expected after fix: [] (empty - hamburger hidden at all desktop widths)');
      
      // EXPECTED BEHAVIOR: No widths should have the bug
      // This assertion will FAIL on unfixed code
      expect(widthsWithBug).toHaveLength(0);
    });

    it('documents the missing responsive class on hamburger button', () => {
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      const classes = hamburgerButton?.className || '';
      
      // Check for responsive display classes
      const hasLgHidden = classes.includes('lg:hidden');
      const hasLgInvisible = classes.includes('lg:invisible');
      const hasLgOpacity0 = classes.includes('lg:opacity-0');
      
      console.log('Hamburger button classes:', classes);
      console.log('Has lg:hidden?', hasLgHidden);
      console.log('Has lg:invisible?', hasLgInvisible);
      console.log('Has lg:opacity-0?', hasLgOpacity0);
      console.log('Expected: At least one responsive hiding class should be present');
      
      // EXPECTED BEHAVIOR: Should have lg:hidden class
      // This will FAIL on unfixed code, documenting the missing class
      expect(hasLgHidden || hasLgInvisible || hasLgOpacity0).toBe(true);
      expect(hasLgHidden).toBe(true); // Specifically should use lg:hidden
    });
  });
});
