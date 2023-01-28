import { FC, ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
}

export const BlogLayout: FC<BlogLayoutProps> = ({ children, title }) => {
  return (
    <>
      <div className='tech-bg'>
        <div className='flex items-center justify-center h-full text-3xl'>
          {title}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};
