import { Header } from "../header";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const GRID_LENGTH = 4;
  return (
    <div className='w-full min-h-screen bg-primary relative'>
      <Header />

      {/* <div className='absolute left-0 right-0 bottom-0 top-20'>
        <div className={`grid grid-cols-${GRID_LENGTH} h-full`}>
          {Array.from({ length: GRID_LENGTH }).map((_, i) => (
            <span
              key={i}
              className='border-[0.8px] border-dashed border-secondary w-full h-full opacity-20'
            ></span>
          ))}
        </div>
      </div> */}

      <div className='absolute left-0 right-0 bottom-0 top-20 w-fit -z-[2px]'>
        <div className={`grid grid-rows-${GRID_LENGTH} h-full`}>
          {Array.from({ length: GRID_LENGTH }).map((_, i) => (
            <span
              key={i}
              className='border-[0.8px] border-dashed border-secondary w-full h-full opacity-20'
            ></span>
          ))}
        </div>
      </div>

      <div className='max-w-6xl mx-auto h-full'>{children}</div>
    </div>
  );
};
