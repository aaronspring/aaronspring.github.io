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
          <p className="text-xl font-semibold text-gray-100">
            I help data teams ship low-latency{' '}
            <a className={link} href="/#value-geospatial">geospatial data products</a>.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>
              Terabyte-scale{' '}
              <a className={link} href="/#value-geospatial">climate data</a>{' '}
              &rarr; analysis-ready, cloud-optimized for fast queries
            </li>
            <li>
              A generative idea &rarr; verifiable{' '}
              <a className={link} href="/#value-ai">GenAI</a> prototype to
              deployed system
            </li>
            <li>
              Historical user data &rarr; predict behaviour with classical{' '}
              <a className={link} href="/#value-ml">machine learning</a>
            </li>
          </ul>
          <p className="mt-4">
            10 years building data systems, from climate research at the{' '}
            <a className={link} href="/work/">Max Planck Institute</a> (with{' '}
            <a className={link} href="/work/">WMO</a> and{' '}
            <a className={link} href="/work/">ECMWF</a>) to production ML at{' '}
            <a className={link} href="/work/">XING</a>. Today I&rsquo;m a
            trusted freelance partner for startups like{' '}
            <a className={link} href="/work/">Earthmover</a>, collaborating
            with <a className={link} href="/work/">Hugging Face</a> and{' '}
            <a className={link} href="/work/">NVIDIA</a>.
          </p>
          <p className="mt-4">
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
      socialButtons={null}
    />
  </Section>
);

export { Hero };
