import Image from "next/image";
import { notFound } from "next/navigation";

import { PostBody } from "~/components/posts/post-body";
import { Title } from "~/components/title";
import { getPost } from "~/lib/posts";
import readingTime from "reading-time";

async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className='min-h-screen w-full items-center justify-center lg:mt-24 md:py-16 py-14'>
      <div>
        <Title title={post.title} size='normal' align='left' />
        <div className='flex flex-wrap p-2 gap-2'>
          <span>{post.date}</span>
          <ul className='flex items-center justify-center gap-2 mb-6'>
            <span className='bg-white h-1 w-1 rounded-full'></span>
            {!!post?.tags && (
              <li className='!list-none'>{post.tags.join(",   ")}</li>
            )}
            <span className='bg-white h-1 w-1 rounded-full'></span>{" "}
            <span> {readingTime(post.body).text}</span>
          </ul>
        </div>
        <div className='relative lg:h-[400px] h-[300px] my-8 overflow-hidden'>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className='object-contain'
          />
        </div>

        <PostBody>{post?.body}</PostBody>
      </div>
    </div>
  );
}

export default PostPage;
