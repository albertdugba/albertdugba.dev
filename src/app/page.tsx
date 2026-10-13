import React from "react";
import { HomePage } from "~/components/home";
import { getAllPosts } from "~/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts
    .filter((p) => p?.isPublished)
    .sort((a, b) => new Date(b?.date || "").getTime() - new Date(a?.date || "").getTime())
    .slice(0, 4);

  return <HomePage posts={recentPosts} />;
}
