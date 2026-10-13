import Image from "next/image";

export type Project = {
  name: string;
  href: string;
  url: string;
  /** Short line shown under the name. */
  tagline: string;
  screenshot: { src: string; width: number; height: number };
};

/** Add a project here and it gets its own tile on the homepage and the Work page. */
export const PROJECTS: Project[] = [
  {
    name: "Margin",
    href: "https://mymargin.app",
    url: "mymargin.app",
    tagline: "A workspace for serious curiosity",
    screenshot: { src: "/projects/margin.jpg", width: 1800, height: 1000 },
  },
];

/** Tile proportions cycle so a growing set interlocks like a masonry wall. */
const ASPECTS = ["aspect-square", "aspect-[4/3]", "aspect-[4/3]", "aspect-[4/5]"];

/**
 * Minimal tile: the product's landing page on a soft grey panel, bleeding
 * off the edge, with name, URL and tagline below. Static: no hover motion.
 */
export function ProjectCard({
  project,
  index = 0,
  compact = false,
}: {
  project: Project;
  index?: number;
  /** Small blog-card size, used on the homepage. */
  compact?: boolean;
}) {
  return (
    <a
      href={project.href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${project.name}: ${project.tagline} (opens ${project.url})`}
      className='group block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary'
    >
      <div
        className={`relative overflow-hidden bg-lightest-gray ${compact ? "aspect-[3/2] rounded-md" : `rounded-xl ${ASPECTS[index % ASPECTS.length]}`}`}
      >
        {compact ? (
          <Image
            src={project.screenshot.src}
            alt=''
            fill
            sizes='(min-width: 1024px) 19rem, (min-width: 640px) 50vw, 100vw'
            className='object-cover object-top'
          />
        ) : (
          <div className='absolute left-[10%] top-[14%] w-[125%]'>
            <Image
              src={project.screenshot.src}
              width={project.screenshot.width}
              height={project.screenshot.height}
              alt=''
              sizes='(min-width: 640px) 36rem, 100vw'
              className='block h-auto w-full rounded-md shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_12px_32px_-12px_rgba(0,0,0,0.18)]'
            />
          </div>
        )}
      </div>

      <div className={`${compact ? "mt-2" : "mt-4"} flex items-baseline justify-between gap-4`}>
        <p className='text-[1.05rem] font-semibold tracking-[-0.01em] text-lighter-gray'>{project.name}</p>
        <p className='text-sm text-gray'>{project.url}</p>
      </div>
      <p className='mt-1 text-sm text-gray'>{project.tagline}</p>
    </a>
  );
}

/**
 * Two staggered columns (the right one starts lower), single column on phones.
 * Items alternate left/right so the order still reads top-to-bottom.
 */
export function ProjectGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  const left = projects.filter((_, i) => i % 2 === 0);
  const right = projects.filter((_, i) => i % 2 === 1);

  return (
    <div className='grid grid-cols-[minmax(0,1fr)] gap-12 sm:grid-cols-2 sm:gap-8 lg:gap-12'>
      <ul className='flex min-w-0 flex-col gap-12 lg:gap-16'>
        {left.map((project) => (
          <li key={project.href}>
            <ProjectCard project={project} index={projects.indexOf(project)} />
          </li>
        ))}
      </ul>
      {right.length > 0 && (
        <ul className='flex min-w-0 flex-col gap-12 sm:pt-28 lg:gap-16'>
          {right.map((project) => (
            <li key={project.href}>
              <ProjectCard project={project} index={projects.indexOf(project)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Homepage version: small cards on the same grid as the Writing section. */
export function CompactProjectGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  return (
    <div className='grid max-w-[60rem] grid-cols-[minmax(0,1fr)] gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
      {projects.map((project) => (
        <ProjectCard key={project.href} project={project} compact />
      ))}
    </div>
  );
}
