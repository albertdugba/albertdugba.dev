"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className='w-full h-20 py-12 bg-primary'>
      <nav className='max-w-5xl mx-auto flex items-center justify-between'>
        <Link href='/' className='flex item-center bg-secondary p-2 rounded-md'>
          <h1 className='text-xl text-primary font-bold'>AD</h1>
        </Link>

        <ul className='flex items-center gap-7'>
          {LINKS.map((link) => (
            <li key={link.href} className='relative'>
              <Link
                href={link.href}
                className={`${
                  link.href === pathname
                    ? "border-secondary border-b text-secondary"
                    : "text-white "
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
