import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import { ProjectGrid } from "~/components/projects/project-card";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Work | Albert Dugba",
  description: "Products and projects Albert Dugba is building.",
};

export default function ProjectsPage() {
  return (
    <div className='mx-auto w-full max-w-5xl pb-24 pt-20 sm:pt-28'>
      <header className='mb-14 max-w-[40rem] sm:mb-16'>
        <h1
          className={`${overpass.className} text-[clamp(2.75rem,6vw,4.5rem)] leading-none tracking-[-0.03em] text-secondary`}
        >
          Work
        </h1>
        <p className='mt-5 text-lg leading-8 text-article-color'>
          Products I&apos;m building and shipping.
        </p>
      </header>

      <ProjectGrid />
    </div>
  );
}
