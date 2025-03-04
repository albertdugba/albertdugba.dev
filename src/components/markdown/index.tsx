import NextImage from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXImage } from "./mdx-image";
import { Code } from "bright";
import { File, FileTree, Folder } from "./file-tree";
import { MDXNote } from "./mdx-note";
import { CopyButton } from "./copy-button";

Code.theme = {
  dark: "light-plus",
  light: "light-plus",
  lightSelector: '[data-theme="light"]',
};

export const mdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    return (
      <Code className=' shadow-sm bg-gray-50' {...props}>
        {children}
      </Code>
    );
  },
  img: MDXImage as any,
  Image: NextImage as any,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLDetailsElement
  > & {
    summary: string;
  }) => (
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Folder: Folder,
  FileTree: FileTree,
  File: File,
  Note: MDXNote,
  CopyButton: CopyButton,
};
