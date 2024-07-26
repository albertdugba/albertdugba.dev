import { Posts } from "~/components/posts";
import { Title } from "~/components/title";
import { getAllPosts } from "~/lib/posts";
import { Post } from "~/types";

const PostsPage = async () => {
  const posts = (await getAllPosts()) as Post[];

  return (
    <div className='min-h-screen w-full items-center justify-center lg:py-24 md:py-16 py-14'>
      <div className=''>
        <Title title='Blogs' />

        <Posts posts={posts} />
      </div>
    </div>
  );
};
export default PostsPage;
