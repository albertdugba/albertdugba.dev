export const LANGUAGE_BADGE_MAP: Record<string, string> = {
  javascript: "JS",
  js: "JS",
  typescript: "TS",
  ts: "TS",
  tsx: "TSX",
  jsx: "JSX",
  python: "PY",
  py: "PY",
};

export const EXTENSION_TO_LANGUAGE_MAP: Record<string, string> = {
  tsx: "tsx",
  ts: "tsx",
  jsx: "jsx",
  js: "jsx",
  json: "json",
  md: "markdown",
  mdx: "markdown",
};

export const BADGE_STYLES: Record<
  string,
  { backgroundColor: string; color: string }
> = {
  JS: { backgroundColor: "#f7df1e", color: "#000" },
  JSX: { backgroundColor: "#f7df1e", color: "#000" },
  TS: { backgroundColor: "#3178c6", color: "#fff" },
  TSX: { backgroundColor: "#3178c6", color: "#fff" },
  CSS: { backgroundColor: "#ff9800", color: "#fff" },
  HTML: { backgroundColor: "#e34c26", color: "#fff" },
};

export const SHELL_LANGUAGES = new Set(["shell", "zsh", "bash", "sh"]);

export const HIGHLIGHT_STYLES: Record<string, string> = {
  add: "bg-green-500/10 border-l-2 border-green-500",
  del: "bg-gray-100 border-l-2 border-gray-100",
  highlight: "bg-blue-500/10 border-l-2 border-blue-500",
};

export interface LanguageInfo {
  language: string;
  filename: string | null;
  badge: string | null;
  highlightLines: number[];
  highlightType?: "add" | "del" | "highlight" | null;
}

export function getBadgeForExtension(ext: string): string | null {
  return LANGUAGE_BADGE_MAP[ext.toLowerCase()] || null;
}

export function parseLanguageAndFilename(className?: string): LanguageInfo {
  if (!className) {
    return {
      language: "text",
      filename: null,
      badge: null,
      highlightLines: [],
    };
  }

  const match = className.match(/language-(\S+)/);
  if (!match) {
    return {
      language: "text",
      filename: null,
      badge: null,
      highlightLines: [],
    };
  }

  const rawLang = match[1];

  const highlightMatch = rawLang.match(/^([^{]+)\{([^}]+)\}(\w+)?/);
  let baseLang = rawLang;
  let highlightLines: number[] = [];
  let highlightType: "add" | "del" | "highlight" | null = null;

  if (highlightMatch) {
    baseLang = highlightMatch[1];
    const ranges = highlightMatch[2];
    const type = highlightMatch[3];

    ranges.split(",").forEach((range) => {
      if (range.includes("-")) {
        const [start, end] = range.split("-").map(Number);
        for (let i = start; i <= end; i++) {
          highlightLines.push(i);
        }
      } else {
        highlightLines.push(Number(range));
      }
    });

    if (type === "add") highlightType = "add";
    else if (type === "del") highlightType = "del";
    else highlightType = "highlight";
  }

  if (baseLang.includes("/") || baseLang.includes(".")) {
    const extMatch = baseLang.match(/\.(\w+)$/);
    if (extMatch) {
      const ext = extMatch[1].toLowerCase();
      const filename = baseLang;
      const language = EXTENSION_TO_LANGUAGE_MAP[ext] || ext;
      const badge = getBadgeForExtension(ext);

      return { language, filename, badge, highlightLines, highlightType };
    }
  }

  const badge = getBadgeForExtension(baseLang);
  return {
    language: baseLang.toLowerCase(),
    filename: null,
    badge,
    highlightLines,
    highlightType,
  };
}

export function getBadgeStyles() {
  return {
    backgroundColor: "#a7f381",
    color: "#0b1901",
  };
}

export function isShellLanguage(language: string): boolean {
  return SHELL_LANGUAGES.has(language);
}
