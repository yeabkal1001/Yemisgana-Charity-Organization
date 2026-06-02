import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { WhatWeDo } from '@/components/what-we-do';
import { Approach } from '@/components/approach';
import { Goals } from '@/components/goals';
import { Impact } from '@/components/impact';
import { GetInvolved } from '@/components/get-involved';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <About />
      <WhatWeDo />
      <Approach />
      <Goals />
      <Impact />
      <GetInvolved />
      <Footer />
    </main>
  );
}
