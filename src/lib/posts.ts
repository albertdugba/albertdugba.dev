import { cache } from "react";
import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";
import { Post } from "~/types";

const POSTS_DIR = "./src/posts";

async function getFilesInDirectory(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);

      return entry.isDirectory() ? getFilesInDirectory(fullPath) : fullPath;
    })
  );

  return files.flat();
}

export const getAllPosts = cache(async () => {
  const allFiles = await getFilesInDirectory(POSTS_DIR);

  const indexFiles = allFiles.filter(
    (file) => path.basename(file) === "index.mdx"
  );

  return Promise.all(
    indexFiles.map(async (file) => {
      const postContent = await fs.readFile(file, "utf8");
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
