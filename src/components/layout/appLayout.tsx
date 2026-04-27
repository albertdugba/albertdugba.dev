import Image from "next/image";
import { Header } from "../header";
import type { ReactNode } from "react";

const SOCIAL_LINKS = [
  {
    image: "/icons/linkedin.svg",
    href: "https://linkedin.com/in/albertdugba",
  },
  {
    image: "/icons/github.svg",
    href: "https://github.com/albertdugba",
  },
  {
    image: "/icons/twitter.svg",
    href: "https://twitter.com/albertdugba__",
  },
  {
    image: "/icons/medium.svg",
    href: "https://medium.com/@albert.dugba",
  },
];

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='w-full min-h-screen bg-primary relative l'>
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='max-w-5xl h-full mx-auto relative stripe-pattern'>
          <div className='absolute inset-y-0 left-0 w-px bg-stripe-solid'></div>
          <div className='absolute inset-y-0 left-1/3 w-px bg-stripe-dashed'></div>
          <div className='absolute inset-y-0 right-1/3 w-px bg-stripe-dashed'></div>
          <div className='absolute inset-y-0 right-0 w-px bg-stripe-solid'></div>
        </div>
      </div>
      <div className='relative z-10'>
        <div className='w-full'>
          <Header />
        </div>
        <div className='max-w-5xl mx-auto h-full lg:px-3 px-5'>{children}</div>
        <footer className='border-t border-stripeColor w-full'>
          <div className='max-w-5xl mx-auto py-10 lg:px-3 px-5 flex items-center justify-between'>
            <span className='text-gray lg:text-base text-sm'>
              Copyright Albert Dugba &copy; {new Date().getFullYear()}
            </span>
            <ul className='flex items-center gap-5'>
              {SOCIAL_LINKS.map((link, i) => (
                <li key={i}>
                  <a href={link.href} target='_blank' rel='noopener noreferrer'>
                    <Image src={link.image} height={20} width={20} alt='' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};
