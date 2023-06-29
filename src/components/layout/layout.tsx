import { ReactNode, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

import { GithubIcon } from "~/icons/github";
import { HamburgerMenuButton } from "../ui/button/hamburger";
import { MobileMenu } from "../mobile/mobileMenu";
import { Logo } from "~/icons/logo";

interface LayoutProps {
  children: ReactNode;
}

type Direction = "up" | "down" | "";

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [direction, setDirection] = useState<Direction>("");

  const prevScrollPosRef = useRef<any>(0);
  const navbarRef = useRef<any>(null);

  const handleOpenNav = () => {
    setIsNavOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
    document.documentElement.style.overflow = "auto";
  };

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

  const transform =
    direction === "up"
      ? "translateY(0%)"
      : direction === "down"
      ? "translateY(-200%)"
      : "translateY(-10%)";

  const headerStyles = {
    boxShadow: isNavOpen
      ? "unset"
      : direction === "down"
      ? "none"
      : "0px 0px 20px 9px rgba(0, 0, 0, 0.045)",
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
          className={`bg-white flex py-2 h-20 items-center justify-between lg:max-w-6xl w-[90%] mx-auto rounded-md px-8`}
        >
          <div>
            <Link href='/' className='text-primary font-bold text-xl'>
              AD
            </Link>
          </div>

          <ul className='flex items-center gap-8 justify-between z-[999] relative'>
            {navLinks.map((link) => (
              <li className='lg:block hidden relative' key={link.url}>
                <Link href={link.url}>{link.title}</Link>
                {router.asPath === link.url && (
                  <motion.div
                    layoutId='custom-underline'
                    className='Nav__link'
                  />
                )}
              </li>
            ))}

            <div className='lg:hidden block'>
              <HamburgerMenuButton
                isOpen={isNavOpen}
                openNav={handleOpenNav}
                closeNav={handleCloseNav}
              />
            </div>
          </ul>
        </nav>
      </header>

      {isNavOpen && <MobileMenu navLinks={navLinks} />}

      <div className='flex items-center justify-center mt-[140px]'>
        <h1 className='text-3xl capitalize'>My Profile</h1>
      </div>

      <div className='max-w-6xl mx-auto relative'>{children}</div>

      <footer className='max-w-6xl mx-auto p-8'>
        <div className='border-b w-full my-6'></div>
        <GithubIcon />
      </footer>
    </div>
  );
};

const navLinks = [
  {
    title: "My Experience",
    url: "/experience",
  },
  {
    title: "My Portfolio",
    url: "/portfolio",
  },
  {
    title: "My Blogs",
    url: "/blogs",
  },
];
