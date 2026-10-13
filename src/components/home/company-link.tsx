import type { ReactNode } from "react";

type CompanyLinkProps = {
  children: ReactNode;
  href: string;
};

export function CompanyLink({ children, href }: CompanyLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='font-bold text-lighter-gray underline decoration-[var(--lemonAccent)] decoration-2 underline-offset-4 transition-colors hover:decoration-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'
    >
      {children}
    </a>
  );
}
