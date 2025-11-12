import { MetadataRoute } from "next";
import { getAllPosts } from "~/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const baseUrl = "https://albertdugba.dev";

  const blogPosts: MetadataRoute.Sitemap = posts
    .filter((post) => post?.isPublished !== false)
    .map((post) => ({
      url: `${baseUrl}/blog/${post?.slug}`,
      lastModified: new Date(post?.lastModified || post?.date || ""),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...routes, ...blogPosts];
}
