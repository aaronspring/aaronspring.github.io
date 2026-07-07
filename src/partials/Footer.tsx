import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="flex flex-col gap-2 border-t border-gray-600 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-gray-200">
        © Copyright {new Date().getFullYear()} by {AppConfig.site_name}.
      </div>
      <div className="flex gap-4 text-sm text-gray-400">
        <a className="hover:text-cyan-400" href="/impressum">
          Impressum
        </a>
        <a className="hover:text-cyan-400" href="/datenschutz">
          Datenschutz
        </a>
      </div>
    </div>
  </Section>
);

export { Footer };
