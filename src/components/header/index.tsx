import Link from "next/link";

export function Header() {
  return (
    <header className='w-full h-20 p-8 bg-primary'>
      <nav className='max-w-6xl mx-auto flex items-center justify-between'>
        <Link href='/' className='flex item-center bg-secondary p-2 rounded-md'>
          <h1 className='text-xl text-primary font-bold'>AD</h1>
        </Link>

        <ul className='flex items-center gap-7'>
          {LINKS.map((link, i) =>
            link.label === "Resume" ? (
              <a
                key={i}
                href='https://docs.google.com/document/d/1JZpw3Z0a5jcEwEgKpEyfZu4BuwoeDYHr/edit?usp=sharing&ouid=105273381009804636428&rtpof=true&sd=true'
                target='_blank'
                rel='noreferrer'
                className='px-5 py-2.5 bg-secondary text-primary rounded-md'
              >
                Resume
              </a>
            ) : (
              <Link key={i} href={link.href} className='text-white'>
                <li>{link.label}</li>
              </Link>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

const LINKS = [
  {
    label: "Writings",
    href: "/blogs",
  },
  // {
  //   label: "Projects",
  //   href: "/projects",
  // },
  {
    label: "Resume",
    href: "/resume",
  },
];
