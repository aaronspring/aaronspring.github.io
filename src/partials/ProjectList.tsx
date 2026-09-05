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
        id="ai-product-engineering-workshops"
        name="AI Product Engineering Workshops"
        challenge="How to use hyped AI tools as an individual, a team, or a whole company?"
        solution="A 2-day hands-on workshop on working with coding agents: the mechanics underneath, the role shift on top, the craft in between."
        win="Participants confidently use coding agents like Claude Code. The way of working outlasts the tool."
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
        id="ai-recruiting-agent"
        name="AI Recruiting Agent"
        challenge="How to speed up the candidate review load of recruiters and hiring managers at scale?"
        solution="Agent narrowing 20M profiles to 1,000 via embeddings retrieval, down to ~200 prescreened by a fine-tuned LLM, ending at ~10 qualified and interested applicants per job posting."
        win="Reduced time spent on shortlisting for hiring managers to 10 minutes."
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
        id="ad-personalisation"
        name="Ad Personalisation"
        challenge="Maximize revenue per impression by ranking ads by relevance for the user."
        solution="Upgraded from logistic regression to a deep neural network enabling ad-user personalisation."
        win="Improved click-through-ratio and revenue-per-impression by 2%."
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
