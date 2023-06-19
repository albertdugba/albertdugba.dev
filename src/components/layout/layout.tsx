import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "~/icons/logo";
import Link from "next/link";
import { GithubIcon } from "~/icons/github";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const [direction, setDirection] = useState<"up" | "down">(
    "up" as "up" | "down"
  );

  const prevScrollPosRef = useRef<any>(0);
  const navbarRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const direction =
        currentScrollPos > prevScrollPosRef.current ? "down" : "up";
      navbarRef.current.style.top = direction === "up" ? "0" : "-100px";

      prevScrollPosRef.current = currentScrollPos;

      setDirection(direction);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transform = direction === "up" ? "translateY(0%)" : "translateY(-200%)";

  const headerStyles = {
    boxShadow:
      direction === "down" ? "none" : "0px 0px 20px 9px rgba(0, 0, 0, 0.045)",
    backdropFilter: direction === "down" ? "blur(6px)" : "blur(0px)",
    transform,
    transition: "400ms",
    backggroundColor: "white",
  };

  return (
    <div ref={navbarRef} className='w-full teh-bg relative transition-all'>
      <header className='sticky top-10 bottom-0 left-0 right-0 z-50'>
        <nav
          style={headerStyles}
          className={`bg-white flex w-full items-center justify-between max-w-6xl mx-auto rounded-md px-8`}
        >
          <Logo />

          <ul className='flex items-center gap-8 justify-between'>
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* <div className='flex items-center justify-center mt-10'>
        <h1 className='text-5xl mt-10'>My Profile</h1>
      </div> */}
      <div className='max-w-6xl mx-auto flex gap-10 p-8 lg:mt-20 mt-10 min-h-screen'>
        {children}
      </div>

      <footer className='max-w-6xl mx-auto p-8'>
        <div className='border-b w-full my-6'></div>
        <GithubIcon />
      </footer>
    </div>
  );
};

const navLinks = [
  {
    title: "About",
    url: "/about",
  },

  {
    title: "Experience",
    url: "/experience",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "Blog",
    url: "/blogs",
  },
];
