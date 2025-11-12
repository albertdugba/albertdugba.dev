import React from "react";
import NextImage from "next/image";
import { MDXComponents } from "mdx/types";
import { MDXImage } from "./mdx-image";
import { File, FileTree, Folder } from "./file-tree";
import { MDXNote } from "./mdx-note";
import { CopyButton } from "./copy-button";
import { CodeBlock } from "./code-block";

export const mdxComponents: MDXComponents = {
  pre: ({ children }: any) => {
    if (React.isValidElement(children) && children.type === "code") {
      const { className, children: code } = children.props as any;
      const codeString = typeof code === "string" ? code : "";

      return <CodeBlock className={className}>{codeString}</CodeBlock>;
    }

    return <pre>{children}</pre>;
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
