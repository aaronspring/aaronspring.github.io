import { HeroSocial, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <div className="flex flex-col items-center gap-4 rounded-xl bg-slate-800 px-8 py-12 text-center">
      <h2 className="text-3xl font-bold text-white">Get in touch</h2>
      <p className="text-gray-400">
        Interested in working together? Reach out and I'll get back to you.
      </p>
      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/springaaron/" target="_blank" rel="noopener noreferrer">
          <HeroSocial src="/assets/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="mailto:draaronspring@proton.me">
          <svg
            className="h-12 w-12 hover:translate-y-1 stroke-cyan-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
          </svg>
        </a>
        <a href="https://github.com/aaronspring" target="_blank" rel="noopener noreferrer">
          {/* Same 12-box as the others, padded so the mark reads at the
              optical size of the LinkedIn glyph, which carries its own margin. */}
          <img
            className="h-12 w-12 p-1.5 hover:translate-y-1"
            src="/assets/images/github-icon.svg"
            alt="GitHub"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </Section>
);

export { CTA };
