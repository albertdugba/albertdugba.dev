"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "../wordmark";

export function Header() {
  const pathname = usePathname();

  return (
    <header className='w-full'>
      <div className='mx-auto max-w-6xl px-5 lg:px-10'>
        <nav className='flex items-center gap-6 h-20 py-12'>
          <Link
            href='/'
            aria-label='Albert Dugba, home'
            className='relative z-20'
          >
            <Wordmark className='text-[calc(1.05rem+2px)] sm:text-[22px]' />
          </Link>

          <ul className='relative z-20 ml-auto flex items-center gap-5 text-sm sm:gap-7'>
            {LINKS.map((link, index) => {
              const active = link.match?.(pathname) ?? link.href === pathname;
              return (
                <li
                  key={link.href}
                  className={index === 0 ? "hidden sm:list-item" : ""}
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`underline decoration-2 underline-offset-[6px] transition-colors duration-200 ${
                      active
                        ? "font-medium text-lighter-gray decoration-[var(--lemonAccent)]"
                        : "text-gray decoration-transparent hover:text-lighter-gray"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const LINKS: {
  label: string;
  href: string;
  match?: (pathname: string) => boolean;
}[] = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Writing",
    href: "/blog",
    match: (pathname) => pathname.startsWith("/blog"),
  },
  {
    label: "Photos",
    href: "/photos",
  },
  {
    label: "Work",
    href: "/projects",
  },
];
