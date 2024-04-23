import Link from "next/link";

export function Header() {
  return (
    <header className='w-full h-20 p-8 bg-primary'>
      <nav className='max-w-6xl mx-auto flex items-center justify-between'>
        <h1 className='text-xl text-white'>AD</h1>

        <ul className='flex items-center gap-7'>
          {LINKS.map((link, i) => (
            <Link key={i} href={link.href} className='text-white'>
              {link.label === "Resume" ? (
                <button className='px-5 py-2.5 bg-secondary text-primary rounded-md'>
                  Resume
                </button>
              ) : (
                <li>{link.label}</li>
              )}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const LINKS = [
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Projects",
    href: "/projects",
  },

  {
    label: "Resume",
    href: "/resume",
  },
];
