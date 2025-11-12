import { ImageResponse } from "next/og";
import { getAllPosts } from "~/lib/posts";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const posts = await getAllPosts();
  const post = posts.find((p) => p?.slug === params.slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "#0b1901",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#a7f381",
          }}
        >
          Post not found
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1901",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#a7f381",
              display: "flex",
            }}
          >
            albertdugba.dev
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#a7f381",
              lineHeight: 1.2,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#ffffff",
              margin: 0,
              display: "flex",
            }}
          >
            {post.description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {post.tags && post.tags.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                {post.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: "#a7f381",
                      color: "#0b1901",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: 24,
                      fontWeight: "600",
                      display: "flex",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#cbd5e0",
              display: "flex",
            }}
          >
            {post.date}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
