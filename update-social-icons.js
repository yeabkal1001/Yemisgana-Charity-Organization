const fs = require('fs');

const path = 'components/get-involved/index.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the mapping part
const searchString = `            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i} href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <Icon size={13} strokeWidth={2} />
              </a>
            ))}`;

const replaceString = `            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' }
            ].map(({ Icon, label }, i) => (
              <a
                key={i} href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-lime/50 hover:text-[var(--color-text-primary)] focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <Icon size={13} strokeWidth={2} />
              </a>
            ))}`;

content = content.replace(searchString, replaceString);

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete');
