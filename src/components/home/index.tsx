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

  return (
    <div>
      <div className='absolute bottom-6 top-20 left-0 w-1/6'>
        <h1
          style={{ writingMode: "vertical-rl" }}
          className='text-white text-[9.5rem] opacity-5 p-0'
        >
          about me.
        </h1>
      </div>
      <div className='relative h-[90%]  max-w-6xl mt-12 mx-auto flex items-center justify-center'>
        <div className='flex md:flex-row flex-col w-full lg:gap-10 gap-10'>
          <div className='lg:p-0 p-6'>
            <ProfileInfo />
          </div>

          <div className='w-full lg:bg-transparent bg-seconary py-10  -mt-10'>
            <div className='relative lg:h-[500px] h-[250px] lg:w-[95%] w-8/12 mx-auto z-50 lg:mr-20'>
              <div className=''>
                <MotionImage
                  src='/albert.jpg'
                  alt=''
                  fill
                  className='object-cover w-full h-full z-50 absolute rounded-lg'
                />
              </div>
              <div className='lg:block hidden absolute top-7 bg-[#6ddc6f] dary w-full h-full -right-8 z-10 rounded-lg'></div>
              <div className='lg:block hidden absolute top-4 bg-secondary w-full h-full -right-4 z-10 rounded-lg'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
