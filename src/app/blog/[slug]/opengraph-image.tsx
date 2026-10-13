import { ImageResponse } from "next/og";
import readingTime from "reading-time";
import { getAllPosts } from "~/lib/posts";
import { GRAY, OG_SIZE, OgFrame, ogFonts } from "~/lib/og";

export const alt = "Blog post by Albert Dugba";
export const size = OG_SIZE;
export const contentType = "image/png";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default async function Image({ params }: { params: { slug: string } }) {
  const posts = await getAllPosts();
  const post = posts.find((p) => p?.slug === params.slug);
  const fonts = await ogFonts();

  if (!post) {
    return new ImageResponse(
      (
        <OgFrame footer={["WRITING", "albertdugba.dev/blog"]}>
          <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: "-0.045em" }}>Writing</div>
        </OgFrame>
      ),
      { ...size, fonts }
    );
  }

  // Long titles step down so they stay within three lines.
  const titleSize = post.title.length > 70 ? 56 : post.title.length > 45 ? 66 : 76;
  const meta = [formatDate(post.date), readingTime(post.body ?? "").text].join(" · ").toUpperCase();

  return new ImageResponse(
    (
      <OgFrame
        footer={[meta, "albertdugba.dev/blog"]}
      >
        <div style={{ fontSize: titleSize, fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", maxWidth: 1000 }}>
          {post.title}
        </div>
        {post.description && (
          <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.35, color: GRAY, maxWidth: 940 }}>
            {post.description.length > 140 ? `${post.description.slice(0, 137)}…` : post.description}
          </div>
        )}
      </OgFrame>
    ),
    { ...size, fonts }
  );
}
