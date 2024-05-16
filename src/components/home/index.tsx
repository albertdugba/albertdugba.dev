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

  const imageVariants = {
    initial: {
      rotate: "24deg",
      backgroundColor: "#fff",
    },
    animate: {
      rotate: "-12deg",
      backgroundColor: "var(--secondaryColor)",
    },
  };

  return (
    <div>
      <div className='relative h-[90%]  max-w-6xl lg:mt-12 mx-auto flex items-center justify-center'>
        <div className='flex lg:flex-row flex-col-reverse w-full lg:gap-10 gap-10'>
          <div className='lg:p-0 p-6 lg:w-4/5 w-full'>
            <ProfileInfo />
          </div>

          <motion.div
            variants={imageVariants}
            initial='initial'
            animate='animate'
            className='-rotate-12 relative h-48 w-52 transition-all rounded-md shadow-xl md:hidden block mx-auto'
          >
            <MotionImage
              initial={{ rotate: "-24deg" }}
              animate={{ rotate: "12deg" }}
              transition={{ duration: 0.5, type: "spring" }}
              src={"/albert.jpg"}
              fill
              alt='Albert Dugba'
              className='rounded-lg shadow-lg z-[999] object-cover overflow-hidden'
            />
          </motion.div>

          <div className='lg:w-2/5 w-full md:bg-transparent bg-seconary lg:py-10 lg:-mt-10 mt-10'>
            <div className='relative lg:block hidden h-[500px] w-full mx-auto z-50 md:mr-16'>
              <MotionImage
                src='/albert.jpg'
                alt='Albert Dugba'
                fill
                className='object-cover w-full h-full z-50 absolute rounded-lg'
              />

              <div className='lg:block hidden absolute top-7 bg-[#6ddc6f] dary w-full h-full -right-8 z-10 rounded-lg'></div>
              <div className='lg:block hidden absolute top-4 bg-secondary w-full h-full -right-4 z-10 rounded-lg'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
