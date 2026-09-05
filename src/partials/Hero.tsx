import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

// Inline links in the hero carry the accent colour alone — no arrow, so the
// prose still reads as a sentence rather than a list of calls to action.
const link = 'text-cyan-400 hover:text-cyan-300';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Aaron Spring</GradientText>.
        </>
      }
      description={
        <>
          I turn data and AI ideas into production-ready products:
          <ul className="mt-2 list-disc list-inside">
            <li>
              Messy{' '}
              <a className={link} href="/#value-geospatial">climate data</a>{' '}
              &rarr; analysis-ready and effective to query
            </li>
            <li>
              An <a className={link} href="/#value-ai">AI idea</a> &rarr;
              verifiable prototype to deployed system
            </li>
            <li>
              Historical user data &rarr; predict behaviour with classical{' '}
              <a className={link} href="/#value-ml">machine learning</a>
            </li>
          </ul>
          <p className="mt-2">
            <a className={link} href="/work/">9+ years</a> experience with{' '}
            <a className={link} href="/#tag=Climate">geospatial data</a>,{' '}
            <a className={link} href="/#tag=LLM">LLM</a> and{' '}
            <a className={link} href="/#tag=ML">ML</a> systems at scale.
          </p>
          <p className="mt-2">
            Freelancer based in Hamburg, Germany {' '}
            <a className={link} href="/#contact" aria-label="Get in touch">
              <span aria-hidden="true">&#x2709;&#xFE0F;</span>
            </a>
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
