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
            data-goatcounter-click="cv-download-home"
            data-goatcounter-title="Download CV (home)"
          >
            Download CV ↗
          </a>
        </>
      }
      avatar={
        <img
          className="h-52 w-52 rounded-full object-cover border-4 border-cyan-400"
          src="/assets/images/profile.jpeg"
          alt="Aaron Spring"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
