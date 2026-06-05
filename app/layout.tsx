import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Nav } from '@/components/nav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '600', '700', '800'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yemsigana Charity Organization — Building Schools in the Gurage Zone',
  description:
    'Yemisgana Charity Organization builds and renovates schools in the Gurage Zone of Ethiopia, giving 7,000+ children access to safe, modern learning environments.',
  openGraph: {
    title: 'Yemsigana Charity Organization',
    description: 'Building schools and brighter futures for children in the Gurage Zone of Ethiopia.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png', sizes: 'any' },
    ],
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.setAttribute('data-theme', stored);
                    return;
                  }
                  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
                  document.documentElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
                } catch (e) { /* ignore */ }
              })();
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function clean(el) {
                  if (!el) return;
                  const attrs = el.attributes;
                  if (attrs) {
                    for (let i = attrs.length - 1; i >= 0; i--) {
                      const name = attrs[i].name;
                      if (name.startsWith('rtrvr-')) {
                        el.removeAttribute(name);
                      }
                    }
                  }
                  for (let i = 0; i < el.children.length; i++) {
                    clean(el.children[i]);
                  }
                }
                clean(document.documentElement);
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName && mutation.attributeName.startsWith('rtrvr-')) {
                      observer.disconnect();
                      mutation.target.removeAttribute(mutation.attributeName);
                      observer.observe(document.documentElement, { attributes: true, subtree: true });
                    }
                  });
                });
                observer.observe(document.documentElement, { attributes: true, subtree: true });
              })();
            `
          }}
        />
        <div className="noise-overlay" />
        <Nav />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
