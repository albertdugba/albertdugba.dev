"use client";
import React, { forwardRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

import { ProfileInfo } from "../profile";

export const HomePage = () => {
  const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image {...props} ref={ref} alt='Image site' />;
    }
  );

  const MotionImage = motion(ExoticImage);

  const GRID_LENGTH = 4;

  return (
    <div className='w-full min-h-screen bg-primary relative'>
      <div className='absolute bottom-3 left-0'>
        <h1
          style={{ writingMode: "vertical-rl" }}
          className='text-white text-[12rem] opacity-5'
        >
          My Blogs
        </h1>
      </div>
      <div className='absolute inset-0'>
        <div className={`grid grid-rows-${GRID_LENGTH} h-full`}>
          {Array.from({ length: GRID_LENGTH }).map((_, i) => (
            <span
              key={i}
              className='border-[1px] border-secondary w-full h-full opacity-5'
            ></span>
          ))}
        </div>
      </div>
      <div className='absolute inset-0 w-full'>
        <div className={`grid grid-cols-${GRID_LENGTH} h-full`}>
          {Array.from({ length: GRID_LENGTH }).map((_, i) => (
            <span
              key={i}
              className='border-[1px] border-dashed border-secondary w-full h-full opacity-5'
            >
              Hello
            </span>
          ))}
        </div>
      </div>

      {/* <Na /> */}

      <div className='relative h-[90%] lg:p-5 p-6 max-w-6xl -mt-10 mx-auto flex items-center justify-center'>
        <div className='flex md:flex-row flex-col w-full lg:gap-20 gap-10'>
          <div>
            <ProfileInfo />
          </div>

          <div className='relative lg:h-[480px] h-[300px] w-full z-50 lg:mr-6'>
            <MotionImage
              src='/albert-01.jpeg'
              alt=''
              height={550}
              width={200}
              className='object-cover w-full h-full z-50 absolute rounded-lg'
            />
            <div className='lg:block hidden absolute top-7 bg-[#6ddc6f] dary w-full h-full -right-8 z-10 rounded-lg'></div>
            <div className='lg:block hidden absolute top-4 bg-secondary w-full h-full -right-4 z-10 rounded-lg'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
