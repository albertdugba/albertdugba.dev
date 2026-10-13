import type { Post } from "~/types";
import { PostGrid } from "./post-card";

export const Posts = ({ posts }: { posts: Post[] }) => <PostGrid posts={posts} />;
