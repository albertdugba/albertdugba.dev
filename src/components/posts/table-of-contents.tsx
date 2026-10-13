"use client";

import { useEffect, useRef, useState } from "react";
import type { TocItem } from "~/lib/extract-headings";

export function TableOfContents({ headings }: { headings: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -75% 0px",
        threshold: 1.0,
      },
    );

    headingElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav data-toc className='hidden xl:block' aria-label='Table of contents'>
      <div className='sticky top-24'>
        <p className='mb-4 font-mono text-xs uppercase tracking-[0.12em] text-gray'>On this page</p>
        <ul className='list-none space-y-1 border-l border-light-gray pl-0 text-sm'>
          {headings.map(({ id, text, level }) => (
            <li key={id} className='list-none'>
              <a
                href={`#${id}`}
                className={`-ml-px block border-l-2 py-1 leading-snug !no-underline transition-colors duration-200 ${
                  level === 3 ? 'pl-7' : 'pl-4'
                } ${
                  activeId === id
                    ? 'border-[var(--lemonColor)] font-medium text-fg'
                    : 'border-transparent text-gray hover:text-fg'
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
