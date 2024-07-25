import { ReactNode } from "react";

export const FileTree = ({ children }: { children: ReactNode }) => (
  <div className='pl-4'>{children}</div>
);

export const File = ({ name }: { name: string }) => (
  <div className='ml-3'>📄 {name}</div>
);

export const Folder = ({
  name,
  children,
}: {
  children: ReactNode;
  name: string;
}) => (
  <div className='folder'>
    <div className='folder-name'>📁 {name}</div>
    <div className='folder-contents'>{children}</div>
  </div>
);
