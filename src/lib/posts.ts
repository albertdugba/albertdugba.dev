import { cache } from "react";
import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";
import { Post } from "~/types";

export const getAllPosts = cache(async () => {
  const posts = await fs.readdir("./src/posts");

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./src/posts/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      })
  );
});

export async function getPost(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post?.slug === slug);
}
