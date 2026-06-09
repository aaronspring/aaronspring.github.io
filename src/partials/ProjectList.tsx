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
        name="ERA5 ARCO Dataset"
        challenge="Access the most recent ERA5 reanalysis data for AIFS model training as well as historical analysis for paying B2B customers — with data freshness guarantees and reliable access SLAs."
        solution="Built an analysis-ready cloud-optimised (ARCO) ERA5 dataset on Earthmover Arraylake leveraging Icechunk for ACID transactions and an attached SLA covering data freshness and availability."
        img={{
          src: '/assets/images/project-climate-cloud.svg',
          alt: 'Climate array data in the cloud',
        }}
        tags={[
          { label: 'Climate', color: ColorTags.LIME },
          { label: 'ARCO', color: ColorTags.SKY },
          { label: 'Zarr', color: ColorTags.SKY },
          { label: 'Icechunk', color: ColorTags.INDIGO },
          { label: 'AWS S3', color: ColorTags.INDIGO },
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
          { label: 'Data Curation', color: ColorTags.YELLOW },
          { label: 'metaflow', color: ColorTags.AMBER },
          { label: 'Personalisation', color: ColorTags.CYAN },
          { label: 'Python', color: ColorTags.VIOLET },
          { label: 'Scala', color: ColorTags.EMERALD },
        ]}
      />
      <ProjectCard
        name="Ad Personalisation"
        challenge="Which user sees which ad maximizing for revenue?"
        solution="Logistic regression baseline for broad targeting; deep neural network for user-level personalisation delivering 10–15% CTR improvement. LLM-generated ad copy pipeline shipped into the production ad stack."
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
          { label: 'Python', color: ColorTags.VIOLET },
          { label: 'Scala', color: ColorTags.EMERALD },
        ]}
      />
      <ProjectCard
        name="S2S Forecast Challenge"
        challenge="Run a Kaggle-style challenge for sub-seasonal climate forecasts with low entry barriers"
        solution="Curated training datasets and a verification pipeline on git & notebook-based renkulab.io for clean-data ML forecast submissions with standardised metrics."
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
