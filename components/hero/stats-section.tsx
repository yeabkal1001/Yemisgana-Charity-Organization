import { Building2, Users, BookOpen, Heart } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    number: '12+',
    label: 'Schools Built\n& Renovated',
  },
  {
    icon: Users,
    number: '7,000+',
    label: 'Students\nImpacted',
  },
  {
    icon: BookOpen,
    number: 'Countless',
    label: 'Dreams\nEmpowered',
  },
  {
    icon: Heart,
    number: 'One Mission',
    label: 'Brighter Future\nTogether',
  },
];

export function StatsSection() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Stats bar */}
      <div className="backdrop-blur-md px-6 md:px-10 lg:px-14 py-3.5 md:py-4" style={{ background: 'rgba(var(--color-hero-overlay-rgb),0.4)', borderTop: '1px solid var(--color-border)' }}>
        <div className="flex items-center gap-6 md:gap-10 lg:gap-14 max-w-3xl">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-start gap-2.5 min-w-0">
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-lime flex-shrink-0 mt-0.5 stroke-[1.5]" />
                <div>
                  <p className="text-lime font-bold text-[13px] md:text-sm lg:text-base leading-tight">
                    {stat.number}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-[9px] md:text-[10px] leading-tight whitespace-pre-line mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
