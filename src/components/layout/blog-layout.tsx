import { FC, ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
}

export const BlogLayout: FC<BlogLayoutProps> = ({ children, title }) => {
  return (
    <>
      <div className='tech-bg'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-white text-4xl'>{title}</h1>
          <nav className=''>
            <ul className='flex items-center gap-3 justify-between'>
              {navLinks.map((link) => (
                <li key={link.url} className='py-2 text-white'>
                  {link.title}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

const navLinks = [
  {
    title: "About me",
    url: "/about",
  },
  {
    title: "Works",
    url: "/works",
  },
  {
    title: "Blog",
    url: "/blogs",
  },
];
