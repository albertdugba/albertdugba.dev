import { getAllPosts } from "~/lib/posts";

export async function GET() {
  const posts = await getAllPosts();
  const baseUrl = "https://albertdugba.dev";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Albert Dugba's Blog</title>
    <link>${baseUrl}</link>
    <description>Thoughts on software engineering, web development, and technology</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .filter((post) => post?.isPublished !== false)
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post?.title}]]></title>
      <link>${baseUrl}/blog/${post?.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post?.slug}</guid>
      <description><![CDATA[${post?.description}]]></description>
      <pubDate>${new Date(post?.date || "").toUTCString()}</pubDate>
      ${post?.tags?.map((tag: string) => `<category>${tag}</category>`).join("\n      ") || ""}
      ${post?.image ? `<enclosure url="${baseUrl}${post.image}" type="image/jpeg"/>` : ""}
    </item>`
      )
      .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
