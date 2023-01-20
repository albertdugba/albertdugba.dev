import { FC, ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
