"use client";
import React, { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Use a Prism theme
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";

type SupportedLanguages =
  | "javascript"
  | "jsx"
  | "typescript"
  | "tsx"
  | "bash"
  | "json";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  filename?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className = "",
  filename,
}) => {
  const [copied, setCopied] = useState(false);
  const codeRef = React.useRef<HTMLElement>(null);

  // Ensure Prism processes the code after rendering
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [children]);

  // Extract language from className (e.g., "language-jsx")
  const langMatch = className.match(/language-(\w+)/);
  const lang = (langMatch ? langMatch[1] : "typescript") as SupportedLanguages;

  const getCode = (node: React.ReactNode): string =>
    typeof node === "string" ? node : "";

  const code = getCode(children);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='relative rounded-lg overflow-hidden border border-gray-800'>
      {/* File Header */}
      <div className='flex items-center px-4 py-2 bg-gray-900/80 border-b border-gray-800'>
        <span className='text-sm text-gray-400'>
          {filename || `example.${lang}`}
        </span>
      </div>

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className='absolute right-2 top-2 p-2 rounded hover:bg-gray-700/50 transition-colors'
      >
        {copied ? (
          <Check className='h-4 w-4 text-green-400' />
        ) : (
          <Copy className='h-4 w-4 text-gray-400' />
        )}
      </button>

      {/* Code Content */}
      <pre className={`language-${lang} flex-1 p-4 overflow-x-auto`}>
        <code ref={codeRef} className={`language-${lang} font-mono`}>
          {code}
        </code>
      </pre>
    </div>
  );
};
