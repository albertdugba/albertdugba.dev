"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  FileIcon,
  FolderIcon,
  FolderOpen,
} from "lucide-react";
import { cn } from "~/lib/utils";

export const FileTree = ({ children }: { children: React.ReactNode }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        selectedFile,
        setSelectedFile,
        ...child.props,
      });
    }
    return child;
  });

  return (
    <div className='font-mono text-sm rounded-md bg-muted/30 bg-gray-100 text-foreground overflow-hidden'>
      <div className='p-2 text-xs font-medium uppercase tracking-wider text-muted-foreground'>
        Explorer
      </div>
      <div className='py-1'>{childrenWithProps}</div>
    </div>
  );
};

export const File = ({
  name,
  path,
  selectedFile,
  setSelectedFile,
}: {
  name: string;
  path?: string;
  selectedFile?: string | null;
  setSelectedFile?: (path: string | null) => void;
}) => {
  const filePath = path || name;
  const isSelected = selectedFile === filePath;
  const extension = name.split(".").pop()?.toLowerCase();

  const getFileIcon = () => {
    switch (extension) {
      case "js":
      case "jsx":
        return <FileIcon className='h-4 w-4 text-yellow-400' />;
      case "ts":
      case "tsx":
        return <FileIcon className='h-4 w-4 text-blue-400' />;
      case "css":
        return <FileIcon className='h-4 w-4 text-pink-400' />;
      case "json":
        return <FileIcon className='h-4 w-4 text-yellow-600' />;
      case "md":
        return <FileIcon className='h-4 w-4 text-slate-400' />;
      case "html":
        return <FileIcon className='h-4 w-4 text-orange-400' />;
      default:
        return <FileIcon className='h-4 w-4' />;
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-muted/50 rounded-sm transition-colors",
        isSelected && "bg-accent text-accent-foreground"
      )}
      onClick={() => setSelectedFile?.(filePath)}
    >
      {getFileIcon()}
      <span className='truncate'>{name}</span>
    </div>
  );
};

export const Folder = ({
  name,
  children,
  defaultOpen = false,
  selectedFile,
  setSelectedFile,
}: {
  name: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  selectedFile?: string | null;
  setSelectedFile?: (path: string | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        selectedFile,
        setSelectedFile,
        ...child.props,
      });
    }
    return child;
  });

  return (
    <div>
      <div
        className='flex items-center gap-1.5 py-1 px-2 cursor-pointer hover:bg-muted/50 rounded-sm transition-colors'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className='h-3.5 w-3.5 text-muted-foreground' />
        ) : (
          <ChevronRight className='h-3.5 w-3.5 text-muted-foreground' />
        )}
        {isOpen ? (
          <FolderOpen className='h-4 w-4 text-gray-400' />
        ) : (
          <FolderIcon className='h-4 w-4 text-gray-400' />
        )}
        <span className='font-medium'>{name}</span>
      </div>
      {isOpen && (
        <div className='folder-contents ml-4'>{childrenWithProps}</div>
      )}
    </div>
  );
};
