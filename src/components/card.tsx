import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import IMG from "../../public/assets/albertdugba.webp";

interface CardProps {
  imageUrl: string;
  date: string;
  title: string;
  slug: string;
  description: string;
  readingDuration?: string;
}
export const BlogCard: FC<CardProps> = (props) => {
  const { imageUrl, date, title, slug, description, readingDuration } = props;
  return (
    <div className='rounded overflow-hidden shadow-lg w-full flex flex-col pb-2'>
      <div className='h-[200px] relative'>
        <Link href={`/blogs/${slug}`}>
          <Image
            className='object-cover w-full h-full'
            src={imageUrl}
            alt='Sunset in the mountains'
            fill
          />
        </Link>
      </div>
      <div className='px-6 py-4 mb-auto'>
        {/* <div className='mb-3'>
          <a
            href='#'
            className='text-xs text-indigo-600 transition duration-500 ease-in-out'
          >
            Cooking
          </a>
          ,{" "}
          <a
            href='#'
            className='text-xs text-indigo-600 transition duration-500 ease-in-out'
          >
            Recipe
          </a>
        </div> */}
        <Link
          href={`/blogs/${slug}`}
          className='font-medium text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2'
        >
          {title}
        </Link>
        <p className='text-gray-500 text-sm'>{description}</p>
      </div>
      <div className='flex items-center gap-6 px-6 pb-4'>
        <div className='w-10'>
          <Image
            src={IMG}
            alt='adsf'
            className='w-full rounded-md -rotate-45 shadow-2xl'
          />
        </div>

        <div className='text-sm'>
          Albert
          <p className='text-gray-600'>Aug 18</p>
        </div>
      </div>
    </div>
  );
};
