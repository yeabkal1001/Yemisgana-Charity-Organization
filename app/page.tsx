import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { WhatWeDo } from '@/components/what-we-do';
import { Approach } from '@/components/approach';
import { Goals } from '@/components/goals';
import { Impact } from '@/components/impact';
import { GetInvolved } from '@/components/get-involved';

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] overflow-x-hidden" style={{ WebkitTapHighlightColor: 'transparent' }}>
      <Hero />
      <About />
      <WhatWeDo />
      <Approach />
      <Goals />
      <Impact />
      <GetInvolved />
    </main>
  );
}
