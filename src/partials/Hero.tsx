import {
  GradientText,
  HeroAvatar,
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
          based in Hamburg. I build:
          <ul className="mt-2 list-disc list-inside">
            <li>Production ML systems</li>
            <li>LLM-powered applications</li>
            <li>Analysis-ready climate datasets</li>
          </ul>
          <a
            className="mt-3 inline-block text-cyan-400 hover:underline"
            href="/cv_aaron_spring_2026.pdf"
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
    />
  </Section>
);

export { Hero };
