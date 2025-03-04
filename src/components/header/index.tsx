"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className='w-full border-b border-dashed border-stripeColor'>
      <div className='max-w-5xl mx-auto lg:px-3 px-5'>
        <nav className='flex items-center justify-between h-20 py-12'>
          <Link
            href='/'
            className='flex items-center bg-secondary p-2 rounded-md z-20 relative'
          >
            <h1 className='text-xl text-primary font-bold'>AD</h1>
          </Link>

          <ul className='flex items-center gap-7'>
            {LINKS.map((link) => (
              <li key={link.href} className='relative z-20'>
                <Link
                  href={link.href}
                  className={`${
                    link.href === pathname
                      ? "border-secondary border-b text-secondary"
                      : "text-lighter-gray"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* <ThemeSwitch /> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const LINKS = [
  {
    label: "Writings",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  // {
  //   label: "Resume",
  //   href: "/resume",
  // },
];
