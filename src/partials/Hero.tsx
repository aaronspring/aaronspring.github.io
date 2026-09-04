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
          I turn data and AI ideas into products that hold up in production.
          <ul className="mt-2 list-disc list-inside">
            <li>
              Historical user data &rarr; predict behaviour with classical
              machine learning
            </li>
            <li>
              An AI idea &rarr; verifiable prototype to deployed system
            </li>
            <li>Messy climate data &rarr; analysis-ready and cheap to query</li>
          </ul>
          <p className="mt-2">
            9+ years delivering production ML/LLM/data systems at scale.
            Freelance, based in Hamburg.
          </p>
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
