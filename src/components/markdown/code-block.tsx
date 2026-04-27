"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, Token } from "prism-react-renderer";
import { parseLanguageAndFilename, isShellLanguage } from "./code-block-utils";

interface CodeBlockProps {
  children: string;
  className?: string;
}

interface CopyButtonProps {
  copied: boolean;
  onCopy: () => void;
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
      className='rounded p-1 text-gray-400 transition-all hover:text-gray-600'
      aria-label='Copy code'
    >
      {copied ? <Check className='h-4 w-4' /> : <Copy className='h-4 w-4' />}
    </button>
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
        color: "#c0c5cc",
        backgroundColor: "#f3f4f6",
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

    if (highlightType === "add") {
      return { backgroundColor: "rgba(46, 160, 67, 0.15)" };
    } else if (highlightType === "del") {
      return { backgroundColor: "rgba(248, 81, 73, 0.15)" };
    } else {
      return { backgroundColor: "rgba(59, 130, 246, 0.1)" };
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
                color: props.style?.color || "#24292f",
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

  const lightTheme = {
    plain: {
      color: "#24292f",
      backgroundColor: "#ffffff",
    },
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: "#6e7781",
          fontStyle: "italic" as const,
        },
      },
      {
        types: ["punctuation"],
        style: {
          color: "#24292f",
        },
      },
      {
        types: ["namespace"],
        style: {
          color: "#6e7781",
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "#cf222e",
        },
      },
      {
        types: ["property", "tag"],
        style: {
          color: "#116329",
        },
      },
      {
        types: ["string", "attr-value"],
        style: {
          color: "#0a3069",
        },
      },
      {
        types: ["number", "boolean"],
        style: {
          color: "#0550ae",
        },
      },
      {
        types: ["keyword", "operator"],
        style: {
          color: "#cf222e",
        },
      },
      {
        types: ["entity", "url", "symbol", "variable"],
        style: {
          color: "#953800",
        },
      },
      {
        types: ["constant", "regex", "inserted"],
        style: {
          color: "#116329",
        },
      },
      {
        types: ["atrule", "attr-name", "selector"],
        style: {
          color: "#0550ae",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#8250df",
        },
      },
      {
        types: ["class-name"],
        style: {
          color: "#953800",
        },
      },
      {
        types: ["parameter"],
        style: {
          color: "#24292f",
        },
      },
      {
        types: ["builtin"],
        style: {
          color: "#0550ae",
        },
      },
    ],
  };

  return (
    <Highlight theme={lightTheme} code={code} language={language}>
      {({
        className: highlightClassName,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <div
          className='my-6 overflow-hidden rounded-xl border border-[#eaedf0]'
          data-language={language}
        >
          <div
            className='flex items-center justify-between px-4 py-2'
            style={{
              backgroundColor: "#fbfcff",
              borderBottom: "1px solid #e1e1e2",
            }}
          >
            <span>
              {languageBadge && (
                <span
                  className='text-xs font-medium uppercase tracking-wider'
                  style={{ color: "#555" }}
                >
                  {languageBadge}
                </span>
              )}
            </span>
            <CopyButton copied={copied} onCopy={handleCopy} />
          </div>

          <div className='relative group overflow-x-auto overflow-y-hidden'>
            <pre
              className={`m-0 ${highlightClassName}`}
              style={{
                fontFamily: 'var(--font-mono, "Mono Lisa", monospace)',
                paddingTop: "0rem",
                paddingRight: "1.25rem",
                paddingBottom: "0rem",
                paddingLeft: "0",
                backgroundColor: "#ffffff",
                color: lightTheme.plain.color,
                lineHeight: "1.7",
                letterSpacing: "0.01rem",
                fontSize: "0.9rem",
                minWidth: "100%",
                width: "fit-content",
              }}
            >
              <code style={{ color: lightTheme.plain.color }}>
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
