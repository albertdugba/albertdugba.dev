"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, Token, themes } from "prism-react-renderer";
import {
  parseLanguageAndFilename,
  getBadgeStyles,
  isShellLanguage,
} from "./code-block-utils";

interface CodeBlockProps {
  children: string;
  className?: string;
}

interface CopyButtonProps {
  copied: boolean;
  onCopy: () => void;
}

interface LanguageBadgeProps {
  badge: string;
}

interface LineNumberCellProps {
  lineNumber: number;
  isHighlighted: boolean;
  highlightType: "add" | "del" | "highlight" | null | undefined;
  language: string;
}

interface CodeLineProps {
  line: Token[];
  lineNumber: number;
  isHighlighted: boolean;
  highlightType: "add" | "del" | "highlight" | null | undefined;
  language: string;
  getLineProps: any;
  getTokenProps: any;
}

function CopyButton({ copied, onCopy }: CopyButtonProps) {
  return (
    <button
      onClick={onCopy}
      className='absolute top-2 right-2 z-10 rounded px-2 py-1 text-xs text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900'
      style={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
      aria-label='Copy code'
    >
      <div className='flex items-center gap-1'>
        {copied ? (
          <>
            <Check className='h-3 w-3' />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className='h-3 w-3' />
            <span>Copy</span>
          </>
        )}
      </div>
    </button>
  );
}

function LanguageBadge({ badge }: LanguageBadgeProps) {
  return (
    <div className='absolute -top-1 left-4 z-10'>
      <span
        className='inline-block rounded-b px-2.5 py-1 text-xs font-medium uppercase tracking-wider'
        style={getBadgeStyles()}
      >
        {badge}
      </span>
    </div>
  );
}

function LineNumberCell({
  lineNumber,
  isHighlighted,
  highlightType,
  language,
}: LineNumberCellProps) {
  return (
    <div
      className='table-cell text-center select-none px-4 py-1'
      style={{
        width: "60px",
        color: "#637777",
      }}
    >
      {isHighlighted && highlightType === "add" && (
        <span className='font-bold mr-1 text-green-600'>+</span>
      )}
      {isHighlighted && highlightType === "del" && (
        <span className='font-bold mr-1 text-red-600'>-</span>
      )}
      {isShellLanguage(language) ? (
        <span className='font-bold mr-1'>&gt;</span>
      ) : (
        <span> {lineNumber}</span>
      )}
    </div>
  );
}

function CodeLine({
  line,
  lineNumber,
  isHighlighted,
  highlightType,
  language,
  getLineProps,
  getTokenProps,
}: CodeLineProps) {
  const getLineStyles = () => {
    if (!isHighlighted) return {};

    const baseStyle = { color: "#ffffff" };

    if (highlightType === "add") {
      return { ...baseStyle, backgroundColor: "rgba(46, 160, 67, 0.3)" };
    } else if (highlightType === "del") {
      return { ...baseStyle, backgroundColor: "rgba(248, 81, 73, 0.3)" };
    } else {
      return { ...baseStyle, backgroundColor: "rgba(59, 130, 246, 0.25)" };
    }
  };

  return (
    <div
      key={lineNumber}
      {...getLineProps({ line })}
      className='table-row'
      style={getLineStyles()}
    >
      <LineNumberCell
        lineNumber={lineNumber}
        isHighlighted={isHighlighted}
        highlightType={highlightType}
        language={language}
      />
      <span className='table-cell pl-4 py-1'>
        {line.map((token, key) => {
          const props = getTokenProps({ token });
          return (
            <span
              key={key}
              {...props}
              style={{
                ...props.style,
                color: isHighlighted
                  ? "#ffffff"
                  : props.style?.color || "#cbd5e0",
              }}
            />
          );
        })}
      </span>
    </div>
  );
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const {
    language,
    filename,
    badge: languageBadge,
    highlightLines,
    highlightType,
  } = parseLanguageAndFilename(className);

  const handleCopy = async () => {
    const code = typeof children === "string" ? children.trim() : "";
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const code = typeof children === "string" ? children.trim() : "";

  const customDarkTheme = {
    plain: {
      color: "#cbd5e0",
      backgroundColor: "#011627",
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: "#637777",
          fontStyle: "italic" as const,
        },
      },
      {
        types: ["punctuation"],
        style: {
          color: "#cbd5e0",
        },
      },
      {
        types: ["namespace"],
        style: {
          color: "#b2ccd6",
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "#ef5350",
        },
      },
      {
        types: ["property", "tag"],
        style: {
          color: "#7fdbca",
        },
      },
      {
        types: ["string", "attr-value"],
        style: {
          color: "#d9f5dd",
        },
      },
      {
        types: ["number", "boolean"],
        style: {
          color: "#f78c6c",
        },
      },
      {
        types: ["keyword", "operator"],
        style: {
          color: "#c792ea",
        },
      },
      {
        types: ["entity", "url", "symbol", "variable"],
        style: {
          color: "#cbd5e0",
        },
      },
      {
        types: ["constant", "regex", "inserted"],
        style: {
          color: "#80cbc4",
        },
      },
      {
        types: ["atrule", "attr-name", "selector"],
        style: {
          color: "#c5e478",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#82aaff",
        },
      },
      {
        types: ["class-name"],
        style: {
          color: "#ffcb8b",
        },
      },
      {
        types: ["parameter"],
        style: {
          color: "#cbd5e0",
        },
      },
      {
        types: ["builtin"],
        style: {
          color: "#cbd5e0",
        },
      },
    ],
  };

  return (
    <Highlight theme={customDarkTheme} code={code} language={language}>
      {({
        className: highlightClassName,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <div
          className='my-6 overflow-hidden rounded-lg border border-gray-200'
          data-language={language}
        >
          {filename && (
            <div className='px-4 py-2 text-sm font-mono bg-gray-200 text-gray-700 rounded-t-lg'>
              {filename}
            </div>
          )}

          <div className='relative group overflow-x-auto overflow-y-hidden'>
            {languageBadge && <LanguageBadge badge={languageBadge} />}

            <pre
              className={`m-0 ${
                filename ? "" : "rounded-t-lg"
              } rounded-b-lg ${highlightClassName}`}
              style={{
                fontFamily: 'var(--font-mono, "Mono Lisa", monospace)',
                paddingTop: languageBadge ? "2.5rem" : "1rem",
                paddingRight: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "0",
                backgroundColor: customDarkTheme.plain.backgroundColor,
                color: customDarkTheme.plain.color,
                lineHeight: "1.5",
                letterSpacing: "0.025rem",
                fontSize: "0.875rem",
                minWidth: "100%",
                width: "fit-content",
              }}
            >
              <CopyButton copied={copied} onCopy={handleCopy} />

              <code style={{ color: customDarkTheme.plain.color }}>
                {tokens.map((line, i) => (
                  <CodeLine
                    key={i}
                    line={line}
                    lineNumber={i + 1}
                    isHighlighted={highlightLines.includes(i + 1)}
                    highlightType={highlightType}
                    language={language}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                  />
                ))}
              </code>
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  );
}
