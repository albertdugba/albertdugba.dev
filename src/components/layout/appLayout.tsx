import { Header } from "../header";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='w-full min-h-screen bg-primary relative lg:px-8 px-5'>
      <Header />

      <div className='max-w-5xl mx-auto h-full'>{children}</div>
      <footer className='max-w-5xl mx-auto text-gray-400 lg:text-base text-sm py-10'>
        Copyright Albert Dugba &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};
