/*
 * Project tags come in three kinds, and each kind gets one muted colour:
 *
 *   domain  — the business/problem space (cyan, the site accent)
 *   skill   — methods and capabilities (violet)
 *   tool    — languages, libraries, services (neutral)
 *
 * Cards render tags grouped in that order, so a reader scans domain first
 * and stack last instead of a random colour wall.
 */

export const TagKind = {
  DOMAIN: 'domain',
  SKILL: 'skill',
  TOOL: 'tool',
} as const;

export type TagKindValue = (typeof TagKind)[keyof typeof TagKind];

const tagKinds: Record<string, TagKindValue> = {
  // Domains
  Climate: TagKind.DOMAIN,
  'Ad Tech': TagKind.DOMAIN,
  Recruiting: TagKind.DOMAIN,
  'Job Candidate Matching': TagKind.DOMAIN,
  Training: TagKind.DOMAIN,

  // Skills and methods
  ML: TagKind.SKILL,
  'Deep Learning': TagKind.SKILL,
  LLM: TagKind.SKILL,
  Retrieval: TagKind.SKILL,
  Embeddings: TagKind.SKILL,
  'Fine-tuning': TagKind.SKILL,
  Personalisation: TagKind.SKILL,
  'Data Curation': TagKind.SKILL,
  'Data Labeling': TagKind.SKILL,
  ARCO: TagKind.SKILL,
  'Evals & Tracing': TagKind.SKILL,
  Tracing: TagKind.SKILL,

  // Tools, services and languages
  Python: TagKind.TOOL,
  Scala: TagKind.TOOL,
  'Claude Code': TagKind.TOOL,
  'Claude Routines': TagKind.TOOL,
  Zarr: TagKind.TOOL,
  Icechunk: TagKind.TOOL,
  Arraylake: TagKind.TOOL,
  AWS: TagKind.TOOL,
  Coiled: TagKind.TOOL,
  Snowflake: TagKind.TOOL,
  metaflow: TagKind.TOOL,
  qdrant: TagKind.TOOL,
  langfuse: TagKind.TOOL,
  pytorch: TagKind.TOOL,
  tensorflow: TagKind.TOOL,
  'scikit-learn': TagKind.TOOL,
  mlflow: TagKind.TOOL,
  Streamlit: TagKind.TOOL,
  'Claude Routines': TagKind.TOOL,
};

const kindOrder: TagKindValue[] = [TagKind.DOMAIN, TagKind.SKILL, TagKind.TOOL];

export const kindOf = (label: string): TagKindValue =>
  tagKinds[label] ?? TagKind.TOOL;

/** Domain tags first, then skills, then tools; author order kept within a kind. */
export const sortTags = (labels: string[]): string[] =>
  [...labels].sort(
    (a, b) => kindOrder.indexOf(kindOf(a)) - kindOrder.indexOf(kindOf(b))
  );
