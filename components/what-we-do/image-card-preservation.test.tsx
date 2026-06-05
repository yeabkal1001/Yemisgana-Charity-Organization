/**
 * Preservation Property Tests - Image Card Non-Hover Behavior
 * 
 * **Validates: Requirements 3.1, 3.2, 3.3**
 * 
 * Property 2: Preservation - Non-Hover Card Behavior
 * 
 * IMPORTANT: This test follows observation-first methodology
 * - Observes behavior on UNFIXED code for non-hover states
 * - Verifies cards display without blur effect when not hovered
 * - Verifies existing scale transformation (scale-105) is present on hover
 * - Verifies gradient overlay transitions on hover
 * - Verifies card content layout is unchanged
 * 
 * EXPECTED OUTCOME: Tests PASS on unfixed code (confirms baseline to preserve)
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { fc, test } from '@fast-check/vitest';
import { WhatWeDo } from './index';

describe('Property 2: Preservation - Non-Hover Card Behavior', () => {
  
  describe('Non-hover state displays without blur effect', () => {
    it('should not have visible backdrop-blur on any card in default (non-hover) state', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      expect(cards.length).toBe(3);
      
      cards.forEach((card, index) => {
        // Verify card does NOT have hover class
        expect(card.classList.contains('hover')).toBe(false);
        
        // Background container should exist
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        expect(bgContainer).toBeTruthy();
        
        // In non-hover state, backdrop-blur element may exist but should be invisible (opacity-0)
        // This preserves the visual behavior: no blur effect visible when not hovering
        const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
        if (backdropBlurElement) {
          // If blur element exists, it must be hidden with opacity-0
          expect(backdropBlurElement.className).toContain('opacity-0');
          // And should show on hover
          expect(backdropBlurElement.className).toContain('group-hover:opacity-100');
        }
      });
    });

    test.prop([fc.integer({ min: 0, max: 2 })])(
      'any card should not have visible backdrop-blur in non-hover state',
      (cardIndex) => {
        const { container } = render(<WhatWeDo />);
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
        
        // Non-hover state should not have VISIBLE blur effect
        // Element can exist but must be invisible (opacity-0)
        if (backdropBlurElement) {
          expect(backdropBlurElement.className).toContain('opacity-0');
          expect(backdropBlurElement.className).toContain('group-hover:opacity-100');
        }
      }
    );
  });

  describe('Scale transformation (scale-105) is present on hover', () => {
    it('should have scale-105 transform on Image component for hover state', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      
      cards.forEach((card) => {
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        expect(bgContainer).toBeTruthy();
        
        // Find element with scale-105 transition class
        const scaleElement = bgContainer?.querySelector('[class*="group-hover:scale-105"]');
        expect(scaleElement).toBeTruthy();
      });
    });

    test.prop([fc.integer({ min: 0, max: 2 })])(
      'any card should preserve scale-105 hover transformation',
      (cardIndex) => {
        const { container } = render(<WhatWeDo />);
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        const scaleElement = bgContainer?.querySelector('[class*="group-hover:scale-105"]');
        
        expect(scaleElement).toBeTruthy();
      }
    );
  });

  describe('Gradient overlay transitions on hover', () => {
    it('should have gradient overlay with opacity transition on all cards', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      const expectedGradients = [
        'from-lime/20 to-transparent',
        'from-amber/20 to-transparent',
        'from-sky/20 to-transparent'
      ];
      
      cards.forEach((card, index) => {
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        expect(bgContainer).toBeTruthy();
        
        // Find gradient overlay div
        const gradientOverlay = Array.from(bgContainer?.querySelectorAll('div') || [])
          .find(div => div.className.includes('bg-gradient-to-b'));
        
        expect(gradientOverlay).toBeTruthy();
        
        if (gradientOverlay) {
          const classes = gradientOverlay.className;
          
          // Verify gradient color matches expected
          expect(classes).toContain('bg-gradient-to-b');
          expect(classes).toContain(expectedGradients[index].split(' ')[0]); // from-color
          
          // Verify opacity transition
          expect(classes).toContain('opacity-0');
          expect(classes).toContain('group-hover:opacity-100');
          expect(classes).toContain('transition-opacity');
          expect(classes).toContain('duration-700');
        }
      });
    });

    test.prop([fc.integer({ min: 0, max: 2 })])(
      'any card should have gradient overlay with correct transition properties',
      (cardIndex) => {
        const { container } = render(<WhatWeDo />);
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        const gradientOverlay = Array.from(bgContainer?.querySelectorAll('div') || [])
          .find(div => div.className.includes('bg-gradient-to-b'));
        
        expect(gradientOverlay).toBeTruthy();
        
        const classes = gradientOverlay?.className || '';
        expect(classes).toContain('bg-gradient-to-b');
        expect(classes).toContain('opacity-0');
        expect(classes).toContain('group-hover:opacity-100');
        expect(classes).toContain('transition-opacity');
        expect(classes).toContain('duration-700');
      }
    );
  });

  describe('Card content layout is unchanged', () => {
    it('should have all expected content elements in correct structure', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      const expectedTitles = ['School Construction', 'School Renovation', 'Educational Resources'];
      const expectedNums = ['01', '02', '03'];
      const expectedTags = ['BUILDING NEW FUTURES', 'TRANSFORMING OLD SPACES', 'EQUIPPING EVERY LEARNER'];
      
      cards.forEach((card, index) => {
        // Verify content container exists with correct z-index
        const contentContainer = card.querySelector('.relative.z-10');
        expect(contentContainer).toBeTruthy();
        
        // Verify number element
        const numElement = Array.from(card.querySelectorAll('span'))
          .find(span => span.textContent === expectedNums[index]);
        expect(numElement).toBeTruthy();
        expect(numElement?.className).toContain('font-serif');
        expect(numElement?.className).toContain('font-black');
        
        // Verify icon container
        const iconContainer = card.querySelector('.w-11.h-11.rounded-2xl');
        expect(iconContainer).toBeTruthy();
        expect(iconContainer?.className).toContain('bg-[var(--color-surface)]');
        expect(iconContainer?.className).toContain('border');
        
        // Verify tag
        const tagElement = Array.from(card.querySelectorAll('p'))
          .find(p => p.textContent === expectedTags[index]);
        expect(tagElement).toBeTruthy();
        expect(tagElement?.className).toContain('text-lime');
        expect(tagElement?.className).toContain('tracking-[0.25em]');
        
        // Verify title
        const titleElement = Array.from(card.querySelectorAll('h3'))
          .find(h3 => h3.textContent === expectedTitles[index]);
        expect(titleElement).toBeTruthy();
        expect(titleElement?.className).toContain('font-black');
        expect(titleElement?.className).toContain('tracking-tight');
        
        // Verify divider
        const divider = card.querySelector('.h-px.bg-\\[var\\(--color-border\\)\\]');
        expect(divider).toBeTruthy();
        
        // Verify description paragraph exists
        const descriptionParagraphs = card.querySelectorAll('p.text-\\[var\\(--color-text-muted\\)\\]');
        expect(descriptionParagraphs.length).toBeGreaterThan(0);
        
        // Verify CTA element exists with correct structure
        const ctaElement = Array.from(card.querySelectorAll('div')).find(div => {
          const hasExploreImpact = div.textContent?.includes('Explore Impact');
          const hasGap2 = div.className.includes('gap-2');
          const hasFlexItems = div.className.includes('flex') && div.className.includes('items-center');
          return hasExploreImpact && hasGap2 && hasFlexItems;
        });
        expect(ctaElement).toBeTruthy();
        if (ctaElement) {
          const ctaClasses = ctaElement.className;
          expect(ctaClasses).toContain('text-lime');
          expect(ctaClasses).toContain('opacity-0');
          expect(ctaClasses).toContain('group-hover:opacity-100');
        }
      });
    });

    test.prop([fc.integer({ min: 0, max: 2 })])(
      'any card should have complete content structure (number, icon, tag, title, description, CTA)',
      (cardIndex) => {
        const { container } = render(<WhatWeDo />);
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        // Content container
        const contentContainer = card.querySelector('.relative.z-10');
        expect(contentContainer).toBeTruthy();
        
        // Number
        const numElement = card.querySelector('span.font-serif.font-black');
        expect(numElement).toBeTruthy();
        
        // Icon container
        const iconContainer = card.querySelector('.w-11.h-11.rounded-2xl');
        expect(iconContainer).toBeTruthy();
        
        // Tag
        const tagElements = card.querySelectorAll('p.text-lime');
        expect(tagElements.length).toBeGreaterThan(0);
        
        // Title
        const titleElement = card.querySelector('h3');
        expect(titleElement).toBeTruthy();
        
        // Divider
        const divider = card.querySelector('.h-px');
        expect(divider).toBeTruthy();
        
        // Description
        const descElements = card.querySelectorAll('p');
        expect(descElements.length).toBeGreaterThanOrEqual(2); // At least tag + description
        
        // CTA
        const ctaElements = Array.from(card.querySelectorAll('div'))
          .filter(div => div.textContent?.includes('Explore Impact'));
        expect(ctaElements.length).toBeGreaterThanOrEqual(1);
      }
    );
  });

  describe('Card animations and transitions are preserved', () => {
    it('should have correct transition duration on card container', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      
      cards.forEach((card) => {
        const classes = card.className;
        
        // Verify transition classes
        expect(classes).toContain('transition-all');
        expect(classes).toContain('duration-700');
        expect(classes).toContain('ease-out');
      });
    });

    it('should have correct border and shadow transitions on hover', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      
      cards.forEach((card) => {
        const classes = card.className;
        
        // Verify border is present
        expect(classes).toContain('border');
        expect(classes).toContain('border-[var(--color-border)]');
        
        // Verify rounded corners
        expect(classes).toContain('rounded-3xl');
        
        // Verify overflow hidden (for rounded corners effect)
        expect(classes).toContain('overflow-hidden');
        
        // Verify min height
        expect(classes).toContain('min-h-[500px]');
      });
    });

    it('should have decorative glow ring at bottom on hover', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      
      cards.forEach((card) => {
        // Find the glow ring element
        const glowRing = Array.from(card.querySelectorAll('div'))
          .find(div => 
            div.className.includes('absolute') && 
            div.className.includes('inset-x-0') && 
            div.className.includes('bottom-0') &&
            div.className.includes('h-1')
          );
        
        expect(glowRing).toBeTruthy();
        
        if (glowRing) {
          const classes = glowRing.className;
          expect(classes).toContain('bg-gradient-to-r');
          expect(classes).toContain('from-transparent');
          expect(classes).toContain('via-lime');
          expect(classes).toContain('to-transparent');
          expect(classes).toContain('opacity-0');
          expect(classes).toContain('group-hover:opacity-100');
          expect(classes).toContain('transition-opacity');
          expect(classes).toContain('duration-700');
        }
      });
    });

    test.prop([fc.integer({ min: 0, max: 2 })])(
      'any card should preserve animation timing and classes',
      (cardIndex) => {
        const { container } = render(<WhatWeDo />);
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        // Verify transition properties
        expect(card.className).toContain('transition-all');
        expect(card.className).toContain('duration-700');
        
        // Verify Image has correct transition - find element with scale transition
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        const scaleElement = bgContainer?.querySelector('[class*="duration"]');
        expect(scaleElement).toBeTruthy();
        
        // Verify gradient overlay has correct duration
        const gradientOverlay = bgContainer?.querySelector('[class*="bg-gradient-to-b"]');
        expect(gradientOverlay?.className).toContain('duration-700');
        
        // Verify CTA has correct animation properties
        const ctaElement = Array.from(card.querySelectorAll('div')).find(div => {
          const hasExploreImpact = div.textContent?.includes('Explore Impact');
          const hasGap2 = div.className.includes('gap-2');
          return hasExploreImpact && hasGap2;
        });
        if (ctaElement) {
          expect(ctaElement.className).toContain('duration-500');
        }
      }
    );
  });

  describe('Comprehensive preservation property', () => {
    test.prop([
      fc.integer({ min: 0, max: 2 }),
      fc.boolean()
    ])(
      'card structure and styling are completely preserved across all states',
      (cardIndex, _simulateHover) => {
        const { container } = render(<WhatWeDo />);
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        // Background structure
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        expect(bgContainer).toBeTruthy();
        expect(bgContainer?.querySelector('img')).toBeTruthy();
        
        // Content structure
        const contentContainer = card.querySelector('.relative.z-10');
        expect(contentContainer).toBeTruthy();
        
        // All content elements present
        expect(card.querySelector('span.font-serif')).toBeTruthy(); // number
        expect(card.querySelector('.w-11.h-11')).toBeTruthy(); // icon
        expect(card.querySelector('h3')).toBeTruthy(); // title
        expect(card.querySelectorAll('p').length).toBeGreaterThanOrEqual(2); // tag + desc
        
        // Decorative elements
        const glowRing = Array.from(card.querySelectorAll('div'))
          .find(div => div.className.includes('h-1') && div.className.includes('bottom-0'));
        expect(glowRing).toBeTruthy();
        
        // Transitions preserved
        expect(card.className).toContain('transition-all');
        expect(card.className).toContain('duration-700');
      }
    );
  });
});
