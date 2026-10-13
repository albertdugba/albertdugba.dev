import Link from "next/link";
import { CompactProjectGrid } from "~/components/projects/project-card";

export function NowBuilding() {
  return (
    <section id='building' className='mx-auto mt-24 w-full max-w-5xl scroll-mt-8 sm:mt-32'>
      <div className='mb-8 flex items-baseline justify-between gap-5'>
        <h2 className='text-xl font-bold tracking-[-0.035em] text-lighter-gray sm:text-2xl'>
          Currently building
        </h2>
        <Link
          href='/projects'
          className='text-sm font-medium text-gray transition-colors hover:text-secondary'
        >
          View all work
        </Link>
      </div>

      <CompactProjectGrid />
    </section>
  );
}
