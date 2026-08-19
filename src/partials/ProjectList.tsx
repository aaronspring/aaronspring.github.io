import { ColorTags, GradientText, Section } from 'astro-boilerplate-components';

import { ProjectCard } from './ProjectCard';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <ProjectCard
        name="AI Product Engineering Workshops"
        challenge="How to use hyped AI tools as an individual, a team, or a whole company?"
        solution="A 2-day hands-on workshop where engineers learn the practice of working with coding agents: the mechanics underneath, the role shift on top, the configuration and integration craft in between. Claude Code is the concrete example. The way of working outlasts the tool."
        img={{
          src: '/assets/images/project-agent-workshop.svg',
          alt: 'Hands-on coding agent workshop',
        }}
        tags={[
          { label: 'Claude Code', color: ColorTags.ORANGE },
          { label: 'LLM', color: ColorTags.FUCHSIA },
          { label: 'Tracing', color: ColorTags.GRAY },
          { label: 'Streamlit', color: ColorTags.GRAY },
          { label: 'Python', color: ColorTags.VIOLET },
        ]}
        links={[
          {
            label: 'Training at Hackers & Wizards',
            href: 'https://www.hackersandwizards.dev/training/',
          },
        ]}
      />
      <ProjectCard
        name="ARCO ERA5"
        challenge="Access the best climate reanalysis based on the most recent available data for maps and time-series use-cases."
        solution="Built an analysis-ready cloud-optimised (ARCO) ERA5 dataset on Earthmover Arraylake with dual chunking optimized for maps and time-series applications, leveraging Icechunk for ACID transactions and an attached SLA covering data freshness and availability."
        img={{
          src: '/assets/images/project-climate-cloud.svg',
          alt: 'Climate array data in the cloud',
        }}
        tags={[
          { label: 'Climate', color: ColorTags.LIME },
          { label: 'ARCO', color: ColorTags.SKY },
          { label: 'Zarr', color: ColorTags.SKY },
          { label: 'Icechunk', color: ColorTags.INDIGO },
          { label: 'Arraylake', color: ColorTags.INDIGO },
          { label: 'AWS', color: ColorTags.INDIGO },
          { label: 'Coiled', color: ColorTags.INDIGO },
          { label: 'GitHub Actions', color: ColorTags.GRAY },
          { label: 'Claude Code', color: ColorTags.ORANGE },
          { label: 'Python', color: ColorTags.VIOLET },
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
        name="AI Recruiting Agent"
        challenge="How to speed up recruiter candidate review load at scale?"
        solution="Recruiting agent narrowing 20M profiles to 1,000 candidates via embeddings retrieval, down to ~200 prescreened candidates with a fine-tuned LLM, returning ~10 qualified & interested applicants via personalised outreach per job posting."
        img={{ src: '/assets/images/project-recruiting-funnel.svg', alt: 'AI Recruiting Agent funnel' }}
        tags={[
          { label: 'Job Candidate Matching', color: ColorTags.CYAN },
          { label: 'Embeddings', color: ColorTags.ROSE },
          { label: 'Retrieval', color: ColorTags.ROSE },
          { label: 'qdrant', color: ColorTags.ROSE },
          { label: 'Deep Learning', color: ColorTags.FUCHSIA },
          { label: 'LLM', color: ColorTags.FUCHSIA },
          { label: 'Fine-tuning', color: ColorTags.FUCHSIA },
          { label: 'pytorch', color: ColorTags.FUCHSIA },
          { label: 'Tracing', color: ColorTags.GRAY },
          { label: 'langfuse', color: ColorTags.GRAY },
          { label: 'Streamlit', color: ColorTags.GRAY },
          { label: 'Data Curation', color: ColorTags.YELLOW },
          { label: 'metaflow', color: ColorTags.AMBER },
          { label: 'Snowflake', color: ColorTags.INDIGO },
          { label: 'Personalisation', color: ColorTags.CYAN },
          { label: 'Python', color: ColorTags.VIOLET },
          { label: 'Scala', color: ColorTags.EMERALD },
        ]}
      />
      <ProjectCard
        name="Ad Personalisation"
        challenge="Maximize revenue per impression by selecting the ad most relevant for the user."
        solution="Improved CTR and revenue-per-impression by 2% by upgrading from logistic regression to deep neural network enabling ad-user personalisation."
        img={{ src: '/assets/images/project-ad-personalization.svg', alt: 'Ad user personalization' }}
        tags={[
          { label: 'Ad Tech', color: ColorTags.TEAL },
          { label: 'Personalisation', color: ColorTags.CYAN },
          { label: 'ML', color: ColorTags.BLUE },
          { label: 'scikit-learn', color: ColorTags.BLUE },
          { label: 'mlflow', color: ColorTags.BLUE },
          { label: 'Deep Learning', color: ColorTags.FUCHSIA },
          { label: 'tensorflow', color: ColorTags.FUCHSIA },
          { label: 'Data Curation', color: ColorTags.YELLOW },
          { label: 'Snowflake', color: ColorTags.INDIGO },
          { label: 'Python', color: ColorTags.VIOLET },
          { label: 'Scala', color: ColorTags.EMERALD },
        ]}
      />
      <ProjectCard
        name="S2S Forecast Challenge"
        challenge="Run a Kaggle-style challenge for sub-seasonal climate forecasts with low entry barriers"
        solution="Curated training datasets and a verification pipeline on git & notebook-based renkulab.io for clean-data ML forecast submissions with standardised metrics."
        collaboration="Swiss Data Science Center (SDSC), World Meteorological Organization (WMO) and European Centre for Medium-Range Weather Forecasts (ECMWF)."
        img={{
          src: '/assets/images/project-climate-forecast.svg',
          alt: 'Climate data forecasting with AI',
        }}
        tags={[
          { label: 'Climate', color: ColorTags.LIME },
          { label: 'ARCO', color: ColorTags.SKY },
          { label: 'Zarr', color: ColorTags.SKY },
          { label: 'ML', color: ColorTags.BLUE },
          { label: 'scikit-learn', color: ColorTags.BLUE },
          { label: 'Deep Learning', color: ColorTags.FUCHSIA },
          { label: 'tensorflow', color: ColorTags.FUCHSIA },
          { label: 'Data Curation', color: ColorTags.YELLOW },
          { label: 'Python', color: ColorTags.VIOLET },
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
