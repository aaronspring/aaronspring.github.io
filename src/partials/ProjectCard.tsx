import { kindOf, sortTags } from '@/utils/tags';

type LinkEntry = { label: string; href: string };

type Props = {
  id: string;
  name: string;
  challenge: string;
  solution: string;
  win?: string;
  img: { src: string; alt: string };
  tags: string[];
  links?: LinkEntry[];
  collaboration?: string;
};

const ProjectCard = ({
  id,
  name,
  challenge,
  solution,
  win,
  img,
  tags,
  links,
  collaboration,
}: Props) => (
  <div
    id={id}
    className="project-card flex scroll-mt-24 flex-col gap-6 rounded-md border border-slate-700 bg-slate-800 p-6 md:flex-row"
    data-tags={tags.join('|')}
  >
    <div className="w-full shrink-0 md:w-36">
      <img
        className="h-24 w-full rounded-md object-contain md:h-full md:w-36"
        src={img.src}
        alt={img.alt}
        loading="lazy"
      />
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-gray-100">{name}</h3>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Business Challenge
        </p>
        <p className="mt-1 text-sm text-gray-300">{challenge}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Solution
        </p>
        <p className="mt-1 text-sm text-gray-300">{solution}</p>
      </div>
      {win && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Win
          </p>
          <p className="mt-1 text-sm text-gray-300">{win}</p>
        </div>
      )}
      {collaboration && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Collaboration
          </p>
          <p className="mt-1 text-sm text-gray-300">{collaboration}</p>
        </div>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} »
            </a>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5">
        {sortTags(tags).map((label) => (
          <button
            key={label}
            type="button"
            className={`tag tag-${kindOf(label)}`}
            data-tag={label}
            aria-pressed="false"
            title={`Show projects tagged ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export { ProjectCard };
