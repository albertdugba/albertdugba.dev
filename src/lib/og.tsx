import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#0a0a0a";
export const GRAY = "#6b6b6b";

async function font(file: string) {
  return readFile(path.join(process.cwd(), "src/app/og-fonts", file));
}

/** Overpass (regular + black) and Overpass Mono, to match the site. */
export async function ogFonts() {
  const [regular, black, mono] = await Promise.all([
    font("overpass-400.woff"),
    font("overpass-900.woff"),
    font("overpass-mono-400.woff"),
  ]);
  return [
    { name: "Overpass", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Overpass", data: black, weight: 900 as const, style: "normal" as const },
    { name: "Overpass Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}

/** "[albert dugba]" wordmark, same weights as the site header. */
export function OgWordmark({ size = 34 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", fontSize: size, letterSpacing: "-0.035em", color: INK }}>
      <span style={{ color: GRAY, fontWeight: 400 }}>[</span>
      <span style={{ fontWeight: 900, padding: "0 0.14em" }}>albert</span>
      <span style={{ fontWeight: 400 }}>dugba</span>
      <span style={{ color: GRAY, fontWeight: 400 }}>]</span>
    </div>
  );
}

/** White card with the wordmark top-left and a hairline footer. */
export function OgFrame({
  children,
  footer,
}: {
  children: React.ReactNode;
  /** Left and right footer labels. */
  footer: [string, string];
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        color: INK,
        fontFamily: "Overpass",
        padding: "72px 80px 64px",
      }}
    >
      <OgWordmark />
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #e5e5e5",
          paddingTop: 28,
          fontFamily: "Overpass Mono",
          fontSize: 22,
          color: GRAY,
          letterSpacing: "0.02em",
        }}
      >
        <span>{footer[0]}</span>
        <span>{footer[1]}</span>
      </div>
    </div>
  );
}
