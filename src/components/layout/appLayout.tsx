import { Header } from "../header";
import type { ReactNode } from "react";

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
        <footer className='border-t border-white/5 w-full'>
          <div className='max-w-5xl mx-auto text-gray-400 lg:text-base text-sm py-10 lg:px-3 px-5'>
            Copyright Albert Dugba &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
};
