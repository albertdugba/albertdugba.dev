import Image from "next/image";
import Link from "next/link";
import { Post } from "~/types";

interface BlogCard {
  post?: Post;
}

export const BlogCard = ({ post }: BlogCard) => {
  return (
    <div className='w-full rounded-xl text-white p-2 hover:border-2 hover:border-secondary hover:transition-all hover:-translate-y-2'>
      <Link href={`/blog/${post?.slug}`} className='border'>
        <figure className='relative lg:h-[200px] h-[180px] w-full mb-4'>
          <Image
            src={post?.image || "/blog/pnpm.avif"}
            placeholder='blur'
            blurDataURL='/images/image-placeholder.jpeg'
            fill
            alt=''
            className='w-full h-auto object-cover'
          />
        </figure>
      </Link>

      <Link href={`/blog/${post?.slug}`}>
        <h1 className='text-xl text-primary mb-3 text-white'>{post?.title}</h1>

        <div className='h-16 mb-5 w-full'>
          <p className='text-sm font-light text-white line-clamp-4'>
            {post?.description}
          </p>
        </div>
      </Link>
    </div>
  );
};
