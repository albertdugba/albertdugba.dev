import { Header } from "../header";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='w-full min-h-screen bg-primary relative'>
      <Header />

      <div className='max-w-6xl mx-auto h-full'>
        {children}
        <p className='text-gray-400 lg:text-base text-sm block w-fit lg:ml-0 ml-5 -mt-12 lg:-mt-0'>
          Copyright Albert Dugba &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};
