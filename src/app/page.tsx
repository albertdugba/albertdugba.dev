import React from "react";
import { HomePage } from "~/components/home";
import { getAllPosts } from "~/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      <HomePage />
    </main>
  );
}
