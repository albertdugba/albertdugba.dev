import { MetadataRoute } from "next";
import { getAllPosts } from "~/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getAllPosts();
  return data.map((datum) => ({
    url: `https://albertdugba.dev/blog/${datum?.slug}`,
    lastModified: new Date(datum?.lastModified as number).toISOString(),
    changeFrequency: "weekly",
  }));
}
