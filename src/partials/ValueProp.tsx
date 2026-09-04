import { GradientText, Section } from 'astro-boilerplate-components';

const valueSections = [
  {
    role: 'Geospatial Data Engineer',
    bullets: [
      'Identify datasets for cloud-based workflows in climate risk and energy domains',
      'Build analysis-ready, cloud-optimised (ARCO) climate datasets with inherent safety, consistency and reproducibility',
      'Orchestrate scheduled geospatial cloud pipelines',
      'Optimise storage, chunking, throughput and cost',
    ],
    projects: [
      { name: 'ARCO ERA5', href: '#arco-era5' },
      { name: 'S2S Forecast Challenge', href: '#s2s-forecast-challenge' },
    ],
  },
  {
    role: 'AI Engineer',
    bullets: [
      'Identify GenAI use cases from #weNeedToDoAI',
      'Turn business ideas into verifiable prototypes (fast)',
      'AI evaluations: human annotation design, error analysis and automated verification',
      'Consult on how to integrate AI tooling into your team',
    ],
    projects: [
      { name: 'AI Recruiting Agent', href: '#ai-recruiting-agent' },
      {
        name: 'AI Product Engineering Workshops',
        href: '#ai-product-engineering-workshops',
      },
    ],
  },
  {
    role: 'ML Engineer',
    bullets: [
      'Identify use cases for automated decision-making',
      'Curate training datasets',
      'Train models for automated decision-making',
      'Deploy and monitor models',
    ],
    projects: [{ name: 'Ad Personalisation', href: '#ad-personalisation' }],
  },
];

const ValueProp = () => (
  <Section
    title={
      <>
        Value <GradientText>Proposition</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {valueSections.map((section) => (
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="text-lg font-semibold text-cyan-400">{section.role}</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-300">
            {section.bullets.map((b) => (
              <li>{b}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Projects
            </span>
            {section.projects.map((project) => (
              <a
                key={project.href}
                className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
                href={project.href}
              >
                {project.name} »
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export { ValueProp };
