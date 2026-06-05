/**
 * Bug Condition Exploration Test - Image Card Hover Text Readability
 * 
 * **Validates: Requirements 1.1, 2.1**
 * 
 * Property 1: Bug Condition - Text Readability Without Backdrop Blur
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists
 * DO NOT attempt to fix the test or the code when it fails
 * 
 * This test encodes the EXPECTED behavior:
 * - When hovering over cards, backdrop blur SHOULD be applied
 * - Text SHOULD be readable with sufficient visual separation from background
 * 
 * When this test FAILS on unfixed code, it proves the bug exists.
 * When this test PASSES after the fix, it confirms the bug is resolved.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { fc, test } from '@fast-check/vitest';
import { WhatWeDo } from './index';

describe('Bug Condition: Image Card Hover Text Readability', () => {
  describe('Property 1: Text Readability With Backdrop Blur (Expected Behavior)', () => {
    
    it('should apply backdrop-blur effect when hovering over School Construction card', async () => {
      const { container } = render(<WhatWeDo />);
      
      // Find the School Construction card (first card, num='01')
      const cards = container.querySelectorAll('.group');
      expect(cards.length).toBe(3); // Verify we have all three cards
      
      const schoolConstructionCard = cards[0];
      
      // Simulate hover by adding the hover class
      schoolConstructionCard.classList.add('hover');
      
      // Check the background image container
      const bgContainer = schoolConstructionCard.querySelector('.absolute.inset-0.z-0');
      expect(bgContainer).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Background container should have a child with backdrop-blur
      // This will FAIL on unfixed code (proving bug exists)
      const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
      
      expect(backdropBlurElement).toBeTruthy();
      expect(backdropBlurElement?.classList.toString()).toMatch(/backdrop-blur-(sm|md|lg)/);
    });

    it('should apply backdrop-blur effect when hovering over School Renovation card', async () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      const schoolRenovationCard = cards[1];
      
      schoolRenovationCard.classList.add('hover');
      
      const bgContainer = schoolRenovationCard.querySelector('.absolute.inset-0.z-0');
      expect(bgContainer).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Should have backdrop-blur element
      const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
      
      expect(backdropBlurElement).toBeTruthy();
      expect(backdropBlurElement?.classList.toString()).toMatch(/backdrop-blur-(sm|md|lg)/);
    });

    it('should apply backdrop-blur effect when hovering over Educational Resources card', async () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      const educationalResourcesCard = cards[2];
      
      educationalResourcesCard.classList.add('hover');
      
      const bgContainer = educationalResourcesCard.querySelector('.absolute.inset-0.z-0');
      expect(bgContainer).toBeTruthy();
      
      // EXPECTED BEHAVIOR: Should have backdrop-blur element
      const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
      
      expect(backdropBlurElement).toBeTruthy();
      expect(backdropBlurElement?.classList.toString()).toMatch(/backdrop-blur-(sm|md|lg)/);
    });

    // Property-based test: ALL cards should have backdrop blur on hover
    test.prop([fc.integer({ min: 0, max: 2 })])(
      'any pillar card should have backdrop-blur effect in hover state',
      async (cardIndex) => {
        const { container } = render(<WhatWeDo />);
        
        const cards = container.querySelectorAll('.group');
        const card = cards[cardIndex];
        
        // Simulate hover
        card.classList.add('hover');
        
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        
        // EXPECTED BEHAVIOR: Should have backdrop-blur for text readability
        // COUNTEREXAMPLE on unfixed code: No backdrop-blur element exists
        const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
        
        expect(backdropBlurElement).toBeTruthy();
        
        // Verify the backdrop-blur element has proper styling
        if (backdropBlurElement) {
          const classes = backdropBlurElement.classList.toString();
          
          // Should have backdrop-blur class (sm, md, or lg intensity)
          expect(classes).toMatch(/backdrop-blur-(sm|md|lg)/);
          
          // Should be absolutely positioned to cover the image
          expect(classes).toContain('absolute');
          expect(classes).toContain('inset-0');
          
          // Should have opacity transition for smooth appearance
          expect(classes).toMatch(/opacity-\d+/);
          expect(classes).toMatch(/group-hover:opacity-\d+/);
        }
      }
    );

    it('should provide visual separation between text and background image on hover', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      
      // Test all three cards
      cards.forEach((card, index) => {
        card.classList.add('hover');
        
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
        
        // EXPECTED BEHAVIOR: Each card should have blur effect for text readability
        // COUNTEREXAMPLE: Cards lack backdrop-blur, causing readability issues
        expect(backdropBlurElement).toBeTruthy();
        
        // The backdrop blur should be positioned between the image and text
        // It should be a child of the background container
        if (bgContainer && backdropBlurElement) {
          expect(bgContainer.contains(backdropBlurElement)).toBe(true);
        }
      });
    });
  });

  describe('Counterexample Documentation', () => {
    it('documents which cards have insufficient contrast without backdrop-blur', () => {
      const { container } = render(<WhatWeDo />);
      
      const cards = container.querySelectorAll('.group');
      const cardNames = ['School Construction', 'School Renovation', 'Educational Resources'];
      const cardsWithoutBlur: string[] = [];
      
      cards.forEach((card, index) => {
        card.classList.add('hover');
        
        const bgContainer = card.querySelector('.absolute.inset-0.z-0');
        const backdropBlurElement = bgContainer?.querySelector('[class*="backdrop-blur"]');
        
        if (!backdropBlurElement) {
          cardsWithoutBlur.push(cardNames[index]);
        }
      });
      
      // On UNFIXED code, this will document all cards lacking backdrop-blur
      // Expected: All three cards will be listed
      console.log('Cards without backdrop-blur effect:', cardsWithoutBlur);
      console.log('Expected on unfixed code: All three cards should be listed');
      console.log('Expected after fix: Empty array (all cards have backdrop-blur)');
      
      // EXPECTED BEHAVIOR: No cards should lack backdrop-blur
      // This assertion will FAIL on unfixed code
      expect(cardsWithoutBlur).toHaveLength(0);
    });
  });
});
