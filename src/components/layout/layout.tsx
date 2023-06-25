import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Logo } from "~/icons/logo";
import { GithubIcon } from "~/icons/github";
import { HamburgerMenuButton } from "../ui/button/hamburger";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
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
          className={`bg-white flex py-2 h-20 items-center justify-between lg:max-w-6xl w-[90%] mx-auto rounded-md px-8`}
        >
          <div>
            <Link href='/' className='text-primary'>
              AD
            </Link>
          </div>

          <ul className='flex items-center gap-8 justify-between'>
            {navLinks.map((link) => (
              <li
                className={`lg:block hidden  ${
                  router.asPath === link.url ? "underline text-primary" : ""
                }`}
                key={link.url}
              >
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}

            <div className='lg:hidden block'>
              <HamburgerMenuButton
                isOpen={isNavOpen}
                setIsOpen={setIsNavOpen}
              />
            </div>
          </ul>
        </nav>
      </header>

      {isNavOpen && (
        <div className='absolute'>
          <li>Hello01</li>
          <li>Hello02</li>
          <li>Hello03</li>
        </div>
      )}

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
