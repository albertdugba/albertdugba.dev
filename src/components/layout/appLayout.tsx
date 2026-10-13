import { Header } from "../header";
import { Socials } from "../socials";
import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='w-full min-h-screen bg-primary relative overflow-x-clip'>
      <div className='relative z-10 flex min-h-screen flex-col'>
        <div className='w-full'>
          <Header />
        </div>
        <div className='mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 lg:px-10'>
          {children}
        </div>
        <footer id='footer' className='relative mt-auto w-full'>
          <div className='relative z-10 mx-auto max-w-6xl px-5 py-12 sm:py-16 lg:px-10'>
            <div
              aria-hidden='true'
              className='mb-10 h-px bg-gradient-to-r from-transparent via-light-gray to-transparent sm:mb-12'
            />
            <div className='flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between'>
              <span className='text-gray text-sm'>
                &copy; {new Date().getFullYear()} Albert Dugba. All rights
                reserved.
              </span>
              <Socials />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
