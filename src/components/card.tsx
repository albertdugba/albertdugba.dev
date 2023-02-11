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
    <>
      <div className='rounded overflow-hidden shadow-lg min-h-full pb-4 w-full'>
        <Link href={`/blogs/${slug}`}>
          <div className='relative'>
            <div className='h-[200px]'>
              <Image
                className='object-cover w-full h-full'
                src={imageUrl}
                alt='Sunset in the mountains'
                fill
              />
            </div>
            <div className='hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25'></div>
            <a href='#!'>
              <div className='absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out'>
                Photos
              </div>
            </a>
            <a href='!#'>
              <div className='text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out'>
                <span className='font-bold'>27</span>
                <small>March</small>
              </div>
            </a>
          </div>
        </Link>
        <div className='px-6 py-4'>
          <a
            href='#'
            className='font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out'
          >
            {title}
          </a>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>
        <div className='px-6 py-2 flex items-end'>
          <div className='mt-auto'>
            <div className='w-10'>
              <Image
                src={IMG}
                alt='adsf'
                className='w-full rounded-md -rotate-45 shadow-2xl'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
