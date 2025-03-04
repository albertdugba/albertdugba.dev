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
      rotate: "34deg",
      backgroundColor: "var(--lemonColor)",
    },
    animate: {
      rotate: "-12deg",
      backgroundColor: "var(--lemonColor)",
    },
  };

  return (
    <div>
      <div className='relative h-[90%] max-w-6xl lg:mt-16 mx-auto flex items-center justify-center'>
        <div className='flex lg:flex-row flex-col-reverse w-full lg:gap-10 gap-10'>
          <div className='lg:p-0 lg:w-4/5 w-full'>
            <ProfileInfo />
          </div>

          <motion.div
            variants={imageVariants}
            initial='initial'
            animate='animate'
            className='-rotate-12 relative lg:size-96 size-48 transition-all rounded-md shadow-xl bg-primary block mx-auto lg:mt-0 mt-16'
          >
            <MotionImage
              initial={{ rotate: "-24deg" }}
              animate={{ rotate: "12deg" }}
              transition={{ duration: 0.5, type: "spring" }}
              src='/images/albert.jpeg'
              fill
              alt='Albert Dugba'
              className='rounded-lg shadow-lg z-[999] object-cover overflow-hidden'
              placeholder='blur'
              blurDataURL='https://res.cloudinary.com/dsdifoazf/image/upload/v1715871236/albert_1_kjvfaa.webp'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
