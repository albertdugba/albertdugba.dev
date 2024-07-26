import { ReactNode } from "react";
import { FileIcon, FolderOpenIcon } from "../icons";

export const FileTree = ({ children }: { children: ReactNode }) => (
  <div className='pl-4 bg-gray-800 py-6 rounded-lg'>{children}</div>
);

export const File = ({ name }: { name: string }) => (
  <div className='ml-3 flex items-center gap-1.5'>
    <FileIcon />
    <span>{name}</span>
  </div>
);

export const Folder = ({
  name,
  children,
  level = 0,
}: {
  children: ReactNode;
  name: string;
  level?: number;
}) => (
  <div className={`folder ml-${level * 4}`}>
    <div className='flex items-center gap-1.5'>
      <FolderOpenIcon />
      <span>{name}</span>
    </div>
    <div className='folder-contents ml-4'>{children}</div>
  </div>
);
