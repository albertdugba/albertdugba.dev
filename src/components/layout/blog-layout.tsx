import { FC, ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerMenuButton } from "../ui/button/hamburger";
import Link from "next/link";
import { GithubIcon } from "src/icons/github";
import { TwitterIcon } from "src/icons/twitter";
import { LinkedInIcon } from "src/icons/linkedin";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
}

interface SidebarProps {
  isOpen: boolean;
  routes: {
    title: string;
    url: string;
  }[];
}

export const BlogLayout: FC<BlogLayoutProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='tech-bg relative'>
        <div>
          <div className='fixed top-10 lg:left-20 left-10 z-[21]'>Albert.D</div>
          <div className='fixed top-10 lg:right-20 right-10 z-[21]'>
            <HamburgerMenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{
                  opacity: 0,
                  scale: 0.1,
                  transformOrigin: "top right 48px",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transformOrigin: "top right 48px",
                }}
                exit={{
                  opacity: 0.2,
                  scale: 0,
                  transformOrigin: "top right 148px",
                }}
                transition={{ duration: 0.3 }}
                className='py-7 px-10 bg-white lg:w-[320px] fixed lg:top-4 lg:rounded-md  lg:right-12 w-full lg:h-fit h-full z-20 border overflow-hidden'
              >
                <motion.ul className='lg:mt-2 mt-20'>
                  {navLinks.map((route) => (
                    <li
                      className='lg:px-6 px-0 text-left py-1 w-full my-4 text-purple-600 lg:text-base text-lg'
                      key={route.title}
                    >
                      <Link href={route.url}>{route.title}</Link>
                    </li>
                  ))}
                  <div className='lg:px-6 px-0 text-left mt-10 py-1 w-full my-4 text-gray-400  font-normal'>
                    <p className='uppercase leading-6 -tracking-tighter text-sm'>
                      Drop a message
                    </p>
                    <div>
                      <p className='text-purple-500 mt-3'>
                        albert.dugba@gmail.com
                      </p>
                    </div>
                  </div>
                  <ul className='flex items-center gap-3 lg:px-6 px-0 mt-10'>
                    {socials.map((social, index) => (
                      <li key={index}>
                        <a href={social.url} rel='noreferrer' target='_blank'>
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-white lg:text-6xl text-3xl'>
            <code className='flex items-center gap-3'>
              <span className='text-gray-300 mr-1'>/</span>
              {title}
            </code>
          </h1>
        </div>

        <main>{children}</main>
      </div>
    </>
  );
};

const socials = [
  {
    icon: <GithubIcon />,
    url: "https://github.com/albertdugba",
  },
  {
    icon: <LinkedInIcon />,
    url: "https://linkedin.com/in/albertdugba",
  },
  {
    icon: <TwitterIcon />,
    url: "https://twitter.com/albertdugba__",
  },
];

const navLinks = [
  {
    title: "About Me",
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
