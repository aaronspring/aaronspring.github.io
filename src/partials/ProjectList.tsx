import { GradientText, Section } from 'astro-boilerplate-components';

import { ProjectCard } from './ProjectCard';

const ProjectList = () => (
  <Section
    title={
      /* The filter status shares the heading row, so toggling it never
         moves the project cards. */
      <div className="flex items-baseline justify-between gap-4">
        <span>
          Recent <GradientText>Projects</GradientText>
        </span>
        <div
          id="tag-filter-bar"
          className="flex min-w-0 items-baseline gap-2 whitespace-nowrap text-xs font-normal text-gray-400 sm:text-sm"
          hidden
        >
          <span className="min-w-0 truncate">
            <span id="tag-filter-count" />/<span id="tag-filter-total" />{' '}
            tagged <span className="text-gray-200" id="tag-filter-label" />
          </span>
          <button
            type="button"
            id="tag-filter-clear"
            className="shrink-0 font-medium text-cyan-400 hover:text-cyan-300"
          >
            Clear
          </button>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6" id="project-list">
      <ProjectCard
        id="ai-solution-architect-weather"
        name="AI Solution Architect for Weather and Renewables"
        challenge="How to create AI weather model forecasts fast?"
        solution={
          <>
            Run your own low-latency AI weather model pipeline:
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                <a
                  className="text-cyan-400 hover:text-cyan-300"
                  href="https://nvidia-gtc-berlin-2026.earthmover.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  StormscopeEU nowcasting
                </a>{' '}
                from EUMETSAT satellite data at a 10-minute forecast step,
                reaching users&apos; phones with 10 minutes latency
              </li>
              <li>
                <a
                  className="text-cyan-400 hover:text-cyan-300"
                  href="https://huggingface.co/spaces/hugging-science/ai-weather-models-with-earthmover-data"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECMWF AIFS or WeatherNext2
                </a>{' '}
                run from Earthmover initial conditions in under 30 seconds
              </li>
            </ul>
          </>
        }
        win="Own the lowest-latency forecasts for a competitive edge in energy markets."
        collaboration="NVIDIA Earth-2, Earthmover and Hugging Face."
        img={{
          src: '/assets/images/project-weather-renewables.svg',
          alt: 'Satellite feeding an AI weather forecast for wind and solar',
        }}
        tags={[
          'Weather',
          'Energy',
          'Deep Learning',
          'ARCO',
          'Icechunk',
          'Arraylake',
          'Zarr',
          'Python',
        ]}
        links={[
          {
            label: 'NVIDIA blog',
            href: 'https://blogs.nvidia.com/blog/europe-earth-2-open-models-weather-climate-prediction/',
          },
          {
            label: 'Nowcasting pipeline',
            href: 'https://www.earthmover.io/blog/building-a-low-latency-earth-2-nowcasting-pipeline-with-earthmover',
          },
          {
            label: 'Hugging Face blog',
            href: 'https://huggingface.co/blog/hugging-science/earthmover-hf',
          },
          {
            label: 'Running open AI weather models',
            href: 'https://www.earthmover.io/blog/making-open-source-ai-weather-forecasting-models-easy-to-run',
          },
        ]}
      />
      <ProjectCard
        id="ai-product-engineering-workshops"
        name="AI Product Engineering Workshops"
        challenge="How to use hyped AI tools as an individual, a team, or a whole company?"
        solution="2-day hands-on workshops on working effectively with coding agents: the mechanics underneath, the role shift on top, the craft in between."
        win="Participants confidently use coding agents like Claude Code. The way of working outlasts the tool."
        img={{
          src: '/assets/images/project-agent-workshop.svg',
          alt: 'Hands-on coding agent workshop',
        }}
        tags={['Training', 'Claude Code', 'LLM', 'Tracing', 'Streamlit']}
        links={[
          {
            label: 'Training at Hackers & Wizards',
            href: 'https://www.hackersandwizards.dev/trainings/agentic-engineering-for-developers/',
          },
          {
            label: 'Hackers & Wizards Profile',
            href: 'https://www.hackersandwizards.dev/team/aaron-spring/',
          },
          {
            label: 'Workshop Example',
            href: 'https://lnkd.in/p/dz-t9gUa',
          },
        ]}
      />
      <ProjectCard
        id="arco-era5"
        name="ARCO ERA5"
        challenge="Efficiently access the best up-to-date climate reanalysis."
        solution="Analysis-ready cloud-optimised (ARCO) ERA5 on Earthmover Arraylake, dual-chunked for map and time-series access, with Icechunk ACID transactions and an SLA on freshness updating daily."
        win="Customers can subscribe to a ready-to-use ERA5 dataset. Time-series and map queries execute in under 3 seconds."
        img={{
          src: '/assets/images/project-climate-cloud.svg',
          alt: 'Climate array data in the cloud',
        }}
        tags={[
          'Weather',
          'ARCO',
          'Zarr',
          'Icechunk',
          'Arraylake',
          'AWS',
          'Coiled',
          'Claude Routines',
          'Claude Code',
          'Python',
        ]}
        links={[
          {
            label: 'Marketplace listing',
            href: 'https://app.earthmover.io/marketplace/6a18ae1ba1c8feafd01f2b76?tab=dataset&path=pressure%2Fspatial',
          },
          {
            label: 'Blog post',
            href: 'https://www.earthmover.io/blog/announcing-data-marketplace/',
          },
        ]}
      />
      <ProjectCard
        id="ai-recruiting-agent"
        name="AI Recruiting Agent"
        challenge="How to speed up the candidate review load of recruiters and hiring managers at scale?"
        solution="Agent narrowing 20M profiles to 1,000 via embeddings retrieval, down to ~200 prescreened by a fine-tuned LLM, ending at ~10 qualified and interested applicants per job posting."
        win="Reduced time spent on shortlisting for hiring managers to 10 minutes."
        img={{
          src: '/assets/images/project-recruiting-funnel.svg',
          alt: 'AI Recruiting Agent funnel',
        }}
        tags={[
          'Job Candidate Matching',
          'Embeddings',
          'Retrieval',
          'qdrant',
          'Deep Learning',
          'LLM',
          'Fine-tuning',
          'pytorch',
          'Tracing',
          'langfuse',
          'Streamlit',
          'Claude Code',
          'Data Curation',
          'Data Labeling',
          'metaflow',
          'Snowflake',
          'Personalisation',
          'Python',
          'Scala',
        ]}
      />
      <ProjectCard
        id="ad-personalisation"
        name="Ad Personalisation"
        challenge="Maximize revenue per impression by ranking ads by relevance for the user."
        solution="Upgraded from logistic regression to a deep neural network enabling ad-user personalisation."
        win="Improved click-through-rate by 10–15% and revenue-per-impression by 2% in production."
        img={{
          src: '/assets/images/project-ad-personalization.svg',
          alt: 'Ad user personalization',
        }}
        tags={[
          'Ad Tech',
          'Personalisation',
          'ML',
          'scikit-learn',
          'mlflow',
          'Deep Learning',
          'tensorflow',
          'Data Curation',
          'Snowflake',
          'Python',
          'Scala',
        ]}
      />
      <ProjectCard
        id="s2s-forecast-challenge"
        name="S2S Forecast Challenge"
        challenge="Run a Kaggle-style challenge for sub-seasonal climate forecasts with low entry barriers"
        solution="Curated training datasets and a verification pipeline based on git-lfs and renku notebooks for forecast submissions automatically evaluated on standardised metrics."
        collaboration="Swiss Data Science Center (SDSC), World Meteorological Organization (WMO) and European Centre for Medium-Range Weather Forecasts (ECMWF)."
        img={{
          src: '/assets/images/project-climate-forecast.svg',
          alt: 'Climate data forecasting with AI',
        }}
        tags={[
          'Weather',
          'ARCO',
          'Zarr',
          'ML',
          'scikit-learn',
          'Deep Learning',
          'tensorflow',
          'Data Curation',
          'Python',
        ]}
        links={[
          {
            label: 'Challenge website',
            href: 'https://s2s-ai-challenge.github.io/',
          },
        ]}
      />
    </div>
  </Section>
);

export { ProjectList };
