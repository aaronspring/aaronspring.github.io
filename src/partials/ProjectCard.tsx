import { ColorTags, Tags } from 'astro-boilerplate-components';

type TagEntry = { label: string; color: (typeof ColorTags)[keyof typeof ColorTags] };

type LinkEntry = { label: string; href: string };

type Props = {
  name: string;
  challenge: string;
  solution: string;
  img: { src: string; alt: string };
  tags: TagEntry[];
  links?: LinkEntry[];
};

const ProjectCard = ({ name, challenge, solution, img, tags, links }: Props) => (
  <div className="flex flex-col gap-6 rounded-md border border-slate-700 bg-slate-800 p-6 md:flex-row">
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
      <div className="flex flex-wrap gap-2">
        {tags.map(({ label, color }) => (
          <Tags key={label} color={color}>
            {label}
          </Tags>
        ))}
      </div>
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
    </div>
  </div>
);

export { ProjectCard };
