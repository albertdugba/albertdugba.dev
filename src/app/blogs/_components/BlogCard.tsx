import Image from "next/image";
import Link from "next/link";

interface BlogCard {
  post?: any;
  href?: string;
}
export const BlogCard = ({ post, href }: BlogCard) => {
  return (
    <div className='w-full rounded-xl p-2 bg-secondary'>
      {href ? (
        <Link href={href}>
          <div className='relative w-full lg:h-[250px] h-[180px] mb-4'>
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
        <div className='relative w-full lg:h-[250px] h-[180px] mb-4'>
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

      <div className="p-5">
        <p className='text-secondary rounded-md px-2.5 py-1 w-fit text-xs bg-primary font-semibold'>
          {"pnpm"}
        </p>
        <h1 className='text-2xl text-primary my-4'>
          Pnpm Workspaces or monorepos
        </h1>

        <div className='h-16 mb-5'>
          <p className='text-sm font-light text-primary line-clamp-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            sint natus autem, iure repudiandae magni consequatur aspernatur,
            explicabo error numquam officia beatae reiciendis cum vel.
          </p>
        </div>

        {/* <Link href='/' className='inline-block text-sm text-primary'>
          Read more
        </Link> */}
      </div>
    </div>
  );
};
