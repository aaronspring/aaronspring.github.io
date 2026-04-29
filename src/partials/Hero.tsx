import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Aaron Spring</GradientText>
        </>
      }
      description={
        <>
          Freelance ML engineer, AI engineer and geospatial data engineer 
          based in Hamburg. I build production ML systems, LLM pipelines and
          analysis-ready climate datasets.{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="/cv_aaron_spring_2026_geo.pdf"
            target="_blank"
          >
            Download CV ↗
          </a>
        </>
      }
      avatar={
        <img
          className="h-80 w-64 rounded-xl object-cover"
          src="/assets/images/profile.jpeg"
          alt="Aaron Spring"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/aaronspring" target="_blank" rel="noopener noreferrer">
            <HeroSocial
              src="/assets/images/github-icon.svg"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/aaronspring/" target="_blank" rel="noopener noreferrer">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn"
            />
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
        </>
      }
    />
  </Section>
);

export { Hero };
