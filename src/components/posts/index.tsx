import { Post } from "~/types";
import { BlogCard } from "./post-card";

export const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
      {posts.map((post) => (
        <li key={post.slug}>
          <BlogCard post={post} href={`/blog/${post.slug}`} />
        </li>
      ))}
    </ul>
  );
};
