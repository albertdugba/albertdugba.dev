import { ImageResponse } from "next/og";
import { OG_SIZE, OgFrame, ogFonts } from "~/lib/og";

export const alt = "Albert Dugba, software engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <OgFrame
        footer={["SOFTWARE ENGINEER", "albertdugba.dev"]}
      >
        <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.045em", maxWidth: 940 }}>
          Building software that makes hard things feel simple
        </div>
      </OgFrame>
    ),
    { ...size, fonts: await ogFonts() }
  );
}
