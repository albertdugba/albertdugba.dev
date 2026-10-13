"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { codeToHtml } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { parseLanguageAndFilename } from "./code-block-utils";
import { aubergineDarkTheme, aubergineTheme } from "./shiki-theme";

interface CodeBlockProps {
  children: string;
  className?: string;
}

function CopyButton({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <button
      onClick={onCopy}
      className='rounded p-1 text-gray transition-colors hover:text-lighter-gray'
      aria-label='Copy code'
    >
      {copied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
    </button>
  );
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);
  const { language, badge: languageBadge } =
    parseLanguageAndFilename(className);

  const code = typeof children === "string" ? children.trim() : "";

  useEffect(() => {
    let cancelled = false;

    codeToHtml(code, {
      lang: language,
      // Both themes are emitted as CSS variables; markdown.css picks one per data-theme.
      themes: { light: aubergineTheme, dark: aubergineDarkTheme },
      defaultColor: false,
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationFocus(),
        transformerNotationErrorLevel(),
        transformerNotationWordHighlight(),
      ],
    }).then((html) => {
      if (!cancelled && codeRef.current) {
        codeRef.current.innerHTML = html;
      }
    });

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  const handleCopy = async () => {
    if (!code) return;
    // Strip shiki notation comments before copying
    const cleanCode = code
      .replace(
        /\s*\/\/\s*\[!code\s+(?:\+\+|--|highlight(?::\d+)?|focus(?::\d+)?|error|warning|info|word:\S+(?::\d+)?)\]\s*$/gm,
        "",
      )
      .trim();
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className='shiki-block my-6 overflow-hidden rounded-xl border border-light-gray'
      data-language={language}
    >
      <div
        className='flex items-center justify-between border-b border-light-gray bg-lightest-gray px-4 py-2'
      >
        <span>
          {languageBadge && (
            <span
              className='text-xs font-medium uppercase tracking-wider text-gray'
            >
              {languageBadge}
            </span>
          )}
        </span>
        <CopyButton copied={copied} onCopy={handleCopy} />
      </div>

      <div ref={codeRef} className='shiki-content overflow-x-auto' />
    </div>
  );
}
