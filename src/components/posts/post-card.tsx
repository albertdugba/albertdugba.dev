import Image from "next/image";
import Link from "next/link";
import { Post } from "~/types";

interface BlogCard {
  post?: Post;
  href?: string;
}
export const BlogCard = ({ post, href }: BlogCard) => {
  return (
    <div className='w-full rounded-xl text-white p-2 hover:border-2 hover:border-secondary  hover:transition-all hover:-translate-y-2'>
      {href ? (
        <Link href={href}>
          <div className='relative lg:h-[200px] h-[180px] w-full mb-4'>
            <Image
              src='/blog/pnpm.avif'
              placeholder='blur'
              blurDataURL='/blog/pnpm.avif'
              fill
              alt=''
              className='w-full h-auto object-cover rounded-xl'
            />
          </div>
        </Link>
      ) : (
        <div className='relative w-full lg:h-[180px] h-[180px] mb-4'>
          <Image
            src='/blog/pnpm.avif'
            placeholder='blur'
            blurDataURL='/blog/pnpm.avif'
            fill
            alt=''
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
      )}

      <div>
        <h1 className='text-xl text-primary mb-3 text-white'>{post?.title}</h1>

        <div className='h-16 mb-5 w-full'>
          <p className='text-sm font-light text-white line-clamp-4 p-1'>
            {post?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
