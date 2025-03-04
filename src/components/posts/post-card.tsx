import Image from "next/image";
import Link from "next/link";
import type { Post } from "~/types";

interface BlogCardProps {
  post?: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className='group w-full overflow-hidden rounded-xl border border-transparent bg-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary'>
      <Link href={`/blog/${post?.slug}`} className='block'>
        <div className='relative aspect-video w-full overflow-hidden'>
          <Image
            src={post?.image ?? "/blog/pnpm.avif"}
            placeholder='blur'
            blurDataURL='/images/image-placeholder.jpeg'
            fill
            alt={post?.title || "Blog post"}
            className='object-cover'
          />
        </div>

        <div className='p-5'>
          <p className='mb-2 text-xs font-light text-lighter-gray/70'>
            {post?.date}
          </p>

          <h2 className='mb-3 text-lg font-medium text-lighter-gray transition-colors duration-300 group-hover:text-secondary'>
            {post?.title}
          </h2>

          <p className='line-clamp-2 text-sm font-light leading-relaxed text-lighter-gray/80'>
            {post?.description}
          </p>
        </div>
      </Link>
    </div>
  );
};
