import { GradientText, Section } from 'astro-boilerplate-components';

/*
 * Written from the customer side, not the service side. Each block runs
 * segment -> problem -> promise -> proof -> entry point, so a visitor first
 * recognises their own situation and only then reads what I do about it.
 * The ids are linked from the hero prose, so they stay put.
 */
const valueSections = [
  {
    id: 'value-geospatial',
    segment: 'Climate and energy teams that run on weather data',
    problem:
      'Every analysis starts with weeks of downloading and reformatting ERA5, and the cloud bill grows faster than the insight.',
    promise:
      'Analysis-ready climate data your analysts query directly, updated daily and versioned, so a result from March still reproduces in October.',
    proof: {
      text: 'ARCO ERA5 on Earthmover Arraylake: map and time-series queries in under 3 seconds',
      href: '#arco-era5',
    },
    offer:
      'Start with a four-week dataset pilot: your variables, your access pattern, your cloud, cost per query measured.',
  },
  {
    id: 'value-ai',
    segment: 'Teams with an AI idea that has to survive contact with production',
    problem:
      'There is a demo. Nobody can say whether it is actually good, so it never ships.',
    promise:
      'A prototype you can judge on evidence: evals, error analysis and tracing that show whether it works before you commit a roadmap to it.',
    proof: {
      text: 'AI recruiting agent: 20M profiles down to ~10 qualified applicants per posting, shortlisting cut to 10 minutes',
      href: '#ai-recruiting-agent',
    },
    offer:
      'Start with a two-week use-case audit and prototype, or a two-day AI product engineering workshop for your team.',
  },
  {
    id: 'value-ml',
    segment: 'Product teams automating decisions on their own data',
    problem:
      'Rules and heuristics stopped scaling, and nobody trusts an uplift that was only ever measured on a slide.',
    promise:
      'A model trained on your history, deployed and monitored, with the effect measured in production.',
    proof: {
      text: 'Ad ranking at XING: revenue per impression up 2% in production',
      href: '#ad-personalisation',
    },
    offer:
      'Start with a use-case review: what is worth automating, what data you already have, what the baseline is.',
  },
];

// Named collaborations, in the order they appear in the CV and the projects.
const workedWith = [
  'Max-Planck-Institut für Meteorologie',
  'ECMWF',
  'WMO',
  'Swiss Data Science Center',
  'Earthmover',
  'New Work SE (XING)',
];

const ValueProp = () => (
  <Section
    title={
      <>
        What you <GradientText>get</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-cyan-500/40 bg-slate-800 p-6">
        <p className="text-base text-gray-200">
          Your data becomes usable before the project runs out of patience. I
          build climate and business data systems that hold up in production:
          analysis-ready in the cloud, models that ship, AI prototypes you can
          verify instead of guess about. Everything lands documented in your
          repository, so it keeps running once I am gone.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Five years of climate research at the Max Planck Institute, three
          years shipping ML and LLM systems to production at New Work SE. Few
          people have done both.
        </p>
      </div>

      {valueSections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="scroll-mt-24 rounded-lg border border-slate-700 bg-slate-800 p-6"
        >
          <h2 className="text-lg font-semibold text-cyan-400">
            {section.segment}
          </h2>
          <p className="mt-3 text-sm italic text-gray-400">
            &ldquo;{section.problem}&rdquo;
          </p>
          <p className="mt-3 text-sm text-gray-200">{section.promise}</p>
          <a
            className="mt-3 inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300"
            href={section.proof.href}
          >
            {section.proof.text} &raquo;
          </a>
          <p className="mt-3 text-sm text-gray-400">{section.offer}</p>
        </div>
      ))}

      <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Worked with
        </p>
        <p className="mt-2 text-sm text-gray-300">{workedWith.join(' · ')}</p>
        <p className="mt-4 text-sm text-gray-400">
          How I work: fixed scope for the first engagement, code in your
          repository, documentation and a handover session. Remote from Hamburg,
          in German or English.
        </p>
      </div>
    </div>
  </Section>
);

export { ValueProp };
