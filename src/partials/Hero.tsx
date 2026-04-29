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
        </>
      }
    />
  </Section>
);

export { Hero };
