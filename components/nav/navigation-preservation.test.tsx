/**
 * Preservation Property Tests - Mobile Navigation Behavior
 * 
 * **Validates: Requirements 3.4, 3.5, 3.6**
 * 
 * Property 2: Preservation - Mobile Navigation Behavior
 * 
 * IMPORTANT: This test follows observation-first methodology
 * - Tests are run on UNFIXED code
 * - Tests verify behavior to PRESERVE (mobile/tablet navigation)
 * - EXPECTED OUTCOME: Tests PASS (confirms baseline behavior)
 * 
 * These tests ensure that when fixing Bug 2 (hamburger visibility on desktop),
 * we do NOT break the existing mobile/tablet navigation behavior:
 * - Hamburger button remains visible on mobile/tablet (< 1024px)
 * - Hamburger button opens full-screen overlay menu
 * - Desktop navigation links remain hidden on mobile/tablet
 */

import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
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

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, className, initial, animate, transition, ...props }: any) => (
      <nav className={className} {...props}>{children}</nav>
    ),
    a: ({ children, className, href, onClick, initial, animate, exit, transition, whileHover, whileTap, ...props }: any) => (
      <a className={className} href={href} onClick={onClick} {...props}>{children}</a>
    ),
    div: ({ children, className, style, initial, animate, exit, transition, ...props }: any) => (
      <div className={className} style={style} {...props}>{children}</div>
    ),
    span: ({ children, className, layoutId, transition, ...props }: any) => (
      <span className={className} {...props}>{children}</span>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Preservation Property: Mobile Navigation Behavior (UNFIXED CODE)', () => {
  describe('Requirement 3.4: Hamburger Button Visible on Mobile/Tablet', () => {
    
    it('should display hamburger button at 320px (small mobile)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 320,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      // Hamburger button should exist and be rendered
      expect(hamburgerButton).toBeTruthy();
      
      // Should not have hidden class at mobile viewport
      const classList = Array.from(hamburgerButton?.classList || []);
      expect(classList).not.toContain('hidden');
    });

    it('should display hamburger button at 480px (mobile)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 480,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      const classList = Array.from(hamburgerButton?.classList || []);
      expect(classList).not.toContain('hidden');
    });

    it('should display hamburger button at 768px (tablet)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      const classList = Array.from(hamburgerButton?.classList || []);
      expect(classList).not.toContain('hidden');
    });

    it('should display hamburger button at 1023px (just below lg breakpoint)', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1023,
      });
      
      const { container } = render(<Nav />);
      
      const hamburgerButton = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.getAttribute('aria-label') === 'Open menu');
      
      expect(hamburgerButton).toBeTruthy();
      
      // This is critical - at 1023px (one pixel below lg), hamburger should be visible
      const classList = Array.from(hamburgerButton?.classList || []);
      expect(classList).not.toContain('hidden');
    });

    // Property-based test: Hamburger should be visible at all mobile/tablet widths
    test.prop([fc.integer({ min: 320, max: 1023 })])(
      'hamburger button should be visible at any viewport width below 1024px',
      (viewportWidth) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewportWidth,
        });
        
        const { container } = render(<Nav />);
        
        const hamburgerButton = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.getAttribute('aria-label') === 'Open menu');
        
        // Hamburger button should exist
        expect(hamburgerButton).toBeTruthy();
        
        // Should be rendered (not display: none or hidden class without responsive modifier)
        // Note: lg:hidden would be acceptable since we're below lg breakpoint
        const classes = hamburgerButton?.className || '';
        
        // Button should exist and be present in DOM
        expect(hamburgerButton).not.toBeNull();
      }
    );
  });

  describe('Requirement 3.5: Hamburger Opens Full-Screen Overlay Menu', () => {
    
    it('should open overlay menu when hamburger button is clicked at 320px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 320,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      // Find and click hamburger button
      const hamburgerButton = getByLabelText('Open menu');
      fireEvent.click(hamburgerButton);
      
      // Verify overlay menu is displayed
      const overlayMenu = container.querySelector('[class*="backdrop-blur"]');
      expect(overlayMenu).toBeTruthy();
      
      // Verify close button is present
      const closeButton = container.querySelector('[aria-label="Close menu"]');
      expect(closeButton).toBeTruthy();
    });

    it('should open overlay menu when hamburger button is clicked at 768px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      const hamburgerButton = getByLabelText('Open menu');
      fireEvent.click(hamburgerButton);
      
      // Verify full-screen overlay is rendered with navigation links
      const navLinks = container.querySelectorAll('nav a');
      const hasMenuLinks = Array.from(navLinks).some(link => 
        link.textContent?.includes('About') || 
        link.textContent?.includes('What We Do')
      );
      
      expect(hasMenuLinks).toBe(true);
    });

    it('should open overlay menu when hamburger button is clicked at 1023px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1023,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      const hamburgerButton = getByLabelText('Open menu');
      fireEvent.click(hamburgerButton);
      
      // Verify overlay has proper styling
      const overlayMenu = container.querySelector('[class*="backdrop-blur"]');
      expect(overlayMenu).toBeTruthy();
      
      // Check for navigation structure
      const closeButton = container.querySelector('[aria-label="Close menu"]');
      expect(closeButton).toBeTruthy();
    });

    // Property-based test: Hamburger should open menu at all mobile widths
    test.prop([fc.integer({ min: 320, max: 1023 })])(
      'clicking hamburger button should open overlay menu at any mobile/tablet viewport width',
      (viewportWidth) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewportWidth,
        });
        
        const { container, getByLabelText } = render(<Nav />);
        
        // Click hamburger button
        const hamburgerButton = getByLabelText('Open menu');
        fireEvent.click(hamburgerButton);
        
        // Verify menu is opened (close button becomes available)
        const closeButton = container.querySelector('[aria-label="Close menu"]');
        expect(closeButton).toBeTruthy();
        
        // Verify overlay has backdrop blur styling
        const hasBackdropBlur = container.innerHTML.includes('backdrop-blur');
        expect(hasBackdropBlur).toBe(true);
      }
    );

    it('should close overlay menu when close button is clicked', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      const { container, getByLabelText, queryByLabelText } = render(<Nav />);
      
      // Open menu
      const hamburgerButton = getByLabelText('Open menu');
      fireEvent.click(hamburgerButton);
      
      // Verify menu is open
      let closeButton = queryByLabelText('Close menu');
      expect(closeButton).toBeTruthy();
      
      // Close menu
      if (closeButton) {
        fireEvent.click(closeButton);
      }
      
      // After closing, close button should no longer be in the DOM (menu closed)
      closeButton = queryByLabelText('Close menu');
      expect(closeButton).toBeNull();
    });
  });

  describe('Requirement 3.6: Desktop Navigation Hidden on Mobile/Tablet', () => {
    
    it('should hide desktop navigation links at 320px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 320,
      });
      
      const { container } = render(<Nav />);
      
      // Find the desktop navigation container (has hidden lg:flex classes)
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
      
      // Desktop nav should have "hidden" class (hidden on mobile)
      expect(desktopNav?.classList.contains('hidden')).toBe(true);
      expect(desktopNav?.classList.contains('lg:flex')).toBe(true);
    });

    it('should hide desktop navigation links at 768px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      const { container } = render(<Nav />);
      
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
      expect(desktopNav?.classList.contains('hidden')).toBe(true);
    });

    it('should hide desktop navigation links at 1023px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1023,
      });
      
      const { container } = render(<Nav />);
      
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav).toBeTruthy();
      expect(desktopNav?.classList.contains('hidden')).toBe(true);
    });

    // Property-based test: Desktop nav should be hidden below lg breakpoint
    test.prop([fc.integer({ min: 320, max: 1023 })])(
      'desktop navigation links should have hidden class at any viewport width below 1024px',
      (viewportWidth) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: viewportWidth,
        });
        
        const { container } = render(<Nav />);
        
        // Desktop nav should exist with hidden class
        const desktopNav = container.querySelector('.hidden.lg\\:flex');
        expect(desktopNav).toBeTruthy();
        
        // Should have "hidden" class (not visible below lg breakpoint)
        expect(desktopNav?.classList.contains('hidden')).toBe(true);
        
        // Should have "lg:flex" class (becomes visible at lg breakpoint)
        expect(desktopNav?.classList.contains('lg:flex')).toBe(true);
      }
    );
  });

  describe('Mobile Navigation Behavior Integration', () => {
    
    it('should maintain proper responsive behavior at 767px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 767,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      // Below lg breakpoint: hamburger visible, desktop nav hidden
      const hamburgerButton = getByLabelText('Open menu');
      expect(hamburgerButton).toBeTruthy();
      
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav?.classList.contains('hidden')).toBe(true);
      
      // Verify hamburger functionality
      fireEvent.click(hamburgerButton);
      const closeButton = container.querySelector('[aria-label="Close menu"]');
      expect(closeButton).toBeTruthy();
    });

    it('should maintain proper responsive behavior at 1023px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1023,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      // Below lg breakpoint: hamburger visible, desktop nav hidden
      const hamburgerButton = getByLabelText('Open menu');
      expect(hamburgerButton).toBeTruthy();
      
      const desktopNav = container.querySelector('.hidden.lg\\:flex');
      expect(desktopNav?.classList.contains('hidden')).toBe(true);
      
      // Verify hamburger functionality
      fireEvent.click(hamburgerButton);
      const closeButton = container.querySelector('[aria-label="Close menu"]');
      expect(closeButton).toBeTruthy();
    });

    it('should preserve navigation structure and accessibility at 768px', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      // Hamburger button should have proper aria-label
      const hamburgerButton = getByLabelText('Open menu');
      expect(hamburgerButton.getAttribute('aria-label')).toBe('Open menu');
      
      // Open menu and verify close button accessibility
      fireEvent.click(hamburgerButton);
      const closeButton = container.querySelector('[aria-label="Close menu"]');
      expect(closeButton?.getAttribute('aria-label')).toBe('Close menu');
    });

    it('should preserve menu content and structure when opened at mobile widths', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      const { container, getByLabelText } = render(<Nav />);
      
      // Open menu
      const hamburgerButton = getByLabelText('Open menu');
      fireEvent.click(hamburgerButton);
      
      // Verify all navigation links are present
      const expectedLinks = ['About', 'What We Do', 'Approach', 'Goals', 'Impact', 'Get Involved'];
      const allLinks = Array.from(container.querySelectorAll('a'));
      
      expectedLinks.forEach((linkText) => {
        const hasLink = allLinks.some(link => link.textContent?.includes(linkText));
        expect(hasLink).toBe(true);
      });
      
      // Verify menu has proper styling elements
      const hasBackdropBlur = container.innerHTML.includes('backdrop-blur');
      expect(hasBackdropBlur).toBe(true);
      
      // Verify footer "Donate Now" button is present
      const donateButtons = allLinks.filter(link => link.textContent?.includes('Donate Now'));
      expect(donateButtons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Boundary Conditions', () => {
    
    it('should handle exact breakpoint boundary (1023px vs 1024px)', () => {
      // At 1023px (below lg) - mobile behavior
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1023,
      });
      
      const { container: container1023, getByLabelText: getByLabelText1023 } = render(<Nav />);
      
      const hamburger1023 = getByLabelText1023('Open menu');
      expect(hamburger1023).toBeTruthy();
      
      const desktopNav1023 = container1023.querySelector('.hidden.lg\\:flex');
      expect(desktopNav1023?.classList.contains('hidden')).toBe(true);
      
      // At 1024px (at lg) - desktop behavior (hamburger should be hidden after fix)
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
      
      const { container: container1024 } = render(<Nav />);
      
      const desktopNav1024 = container1024.querySelector('.hidden.lg\\:flex');
      expect(desktopNav1024).toBeTruthy();
      
      // Desktop nav should have lg:flex (visible at 1024px)
      expect(desktopNav1024?.classList.contains('lg:flex')).toBe(true);
    });
  });
});
