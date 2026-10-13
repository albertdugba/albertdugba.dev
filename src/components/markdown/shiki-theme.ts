import type { ThemeRegistration } from "shiki";

/**
 * Code theme: near-black ink on light grey, with syntax colours (plum,
 * terracotta, amber, and a muted teal for contrast). All foregrounds pass
 * WCAG AA on the background.
 */
/** Light → dark foreground mapping (all ≥ 6:1 on the dark background). */
const DARK_FOREGROUNDS: Record<string, string> = {
  "#76657b": "#a898ad", // comments
  "#8a2f9c": "#e6a3f2", // keywords, tags
  "#a8481f": "#ffc091", // strings
  "#b24a12": "#ffb37d", // numbers, constants
  "#1e6b68": "#7fd4cc", // functions
  "#94600a": "#f2c46d", // types, attributes
  "#260a2f": "#f6ebe3", // variables
  "#4b2a57": "#e9d6ee", // properties
  "#6e5d73": "#b9a7bd", // punctuation, operators
  "#2f6b2f": "#9fd89f", // inserted
  "#a1261e": "#ff9a92", // deleted
};

export const aubergineTheme: ThemeRegistration = {
  name: "aubergine-light",
  type: "light",
  colors: {
    "editor.background": "#f6f6f6",
    "editor.foreground": "#0a0a0a",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#76657b", fontStyle: "italic" },
    },
    {
      scope: [
        "keyword",
        "storage",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "keyword.operator.new",
        "keyword.operator.expression",
      ],
      settings: { foreground: "#8a2f9c" },
    },
    {
      scope: ["string", "string.quoted", "string.template", "punctuation.definition.string"],
      settings: { foreground: "#a8481f" },
    },
    {
      scope: ["constant.numeric", "constant.language", "constant.character", "support.constant"],
      settings: { foreground: "#b24a12" },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call entity.name.function",
        "variable.function",
      ],
      settings: { foreground: "#1e6b68" },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
        "entity.other.inherited-class",
        "entity.name.type.interface",
      ],
      settings: { foreground: "#94600a" },
    },
    {
      scope: ["entity.name.tag", "support.class.component"],
      settings: { foreground: "#8a2f9c" },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: { foreground: "#94600a" },
    },
    {
      scope: ["variable", "variable.other", "variable.parameter", "meta.definition.variable"],
      settings: { foreground: "#0a0a0a" },
    },
    {
      scope: ["variable.other.property", "support.variable.property", "meta.object-literal.key"],
      settings: { foreground: "#4b2a57" },
    },
    {
      scope: ["keyword.operator", "punctuation", "meta.brace", "punctuation.separator"],
      settings: { foreground: "#6e5d73" },
    },
    {
      scope: ["markup.inserted"],
      settings: { foreground: "#2f6b2f" },
    },
    {
      scope: ["markup.deleted"],
      settings: { foreground: "#a1261e" },
    },
  ],
};

/** Dark counterpart: cream ink on deep aubergine, lighter tints of the same hues. */
export const aubergineDarkTheme: ThemeRegistration = {
  name: "aubergine-dark",
  type: "dark",
  colors: {
    "editor.background": "#2a1031",
    "editor.foreground": "#f6ebe3",
  },
  tokenColors: aubergineTheme.tokenColors!.map((rule) => ({
    ...rule,
    settings: {
      ...rule.settings,
      foreground: DARK_FOREGROUNDS[rule.settings.foreground as string] ?? rule.settings.foreground,
    },
  })),
};
