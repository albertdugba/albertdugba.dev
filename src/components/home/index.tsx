import type { Post } from "~/types";
import { Hero } from "./hero";
import { NowBuilding } from "./now-building";
import { RecentArticles } from "./recent-articles";

export const HomePage = ({ posts }: { posts: (Post | null)[] }) => {
  return (
    <div className='pb-8 sm:pb-12'>
      <Hero />
      <NowBuilding />
      <RecentArticles posts={posts} />
    </div>
  );
};
