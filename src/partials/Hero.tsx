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
          I turn data and AI ideas into production-ready products:
          <ul className="mt-2 list-disc list-inside">
            <li>
              Messy climate data &rarr; analysis-ready and effective to query
            </li>
            <li>
              An AI idea &rarr; verifiable prototype to deployed system
            </li>
            <li>
              Historical user data &rarr; predict behaviour with classical
              machine learning
            </li>
          </ul>
          <p className="mt-2">
            9+ years experience with geospatial data, LLM and ML systems
            at scale. Freelancer based in Hamburg.
          </p>
        </>
      }
      avatar={
        <img
          className="h-52 w-52 rounded-full object-cover border-4 border-cyan-400"
          src="/assets/images/profile.jpeg"
          alt="Aaron Spring"
          width={208}
          height={208}
          loading="eager"
          fetchPriority="high"
        />
      }
    />
  </Section>
);

export { Hero };
