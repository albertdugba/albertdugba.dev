import { forwardRef, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { isMobile } from "react-device-detect";

import profileImage from "../../../public/assets/albertdugba.webp";
import { aboutContent } from "src/mocks/profile";
import { GithubIcon } from "src/icons/github";
import { LinkedInIcon } from "src/icons/linkedin";
import { TwitterIcon } from "src/icons/twitter";
import { SpotifyWidget } from "../widget";

export const HomePage = () => {
  const [isExpanded, setExpanded] = useState(true);
  const LIMIT = 150;

  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    }
  }, []);

  const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image {...props} ref={ref} alt='' />;
    }
  );

  const MotionImage = motion(ExoticImage);

  const animateImageCard = {
    cardVariant: {
      inactive: {
        rotate: "24deg",
        backgroundColor: "#fff",
      },
      active: {
        rotate: "-12deg",
        backgroundColor: "#dbb4e0",
      },
    },
  };

  return (
    <div className='relative'>
      <div className='flex items-center justify-between w-screen h-screen tech-bg'>
        <motion.div className='p-3 lg:w-[650px] w-full mx-auto absolute inset-x-0  md:w-3/5 z-20'>
          <AnimatePresence presenceAffectsLayout>
            <motion.div
              layout
              className='bg-gradient-to-r from-[#f5deed] to-[#f9f7f9] shadow-xl lg:p-8 p-4 rounded-lg'
            >
              <div className='flex items-center justify-center lg:-mt-28 md:-mt-20 sm:-mt-16 -mt-16 my-6 transition-all relative rounded-md'>
                <motion.div
                  initial={{
                    rotate: "24deg",
                    backgroundColor: "#fff",
                  }}
                  animate={{
                    rotate: "-12deg",
                    backgroundColor: "#dbb4e0",
                  }}
                  className='-rotate-12 relative h-36 w-36  transition-all rounded-md shadow-xl'
                >
                  <MotionImage
                    initial={{ rotate: "-24deg" }}
                    animate={{ rotate: "12deg" }}
                    transition={{ duration: 0.5, type: "spring" }}
                    src={profileImage}
                    fill
                    alt='Albert Dugba'
                    className='rounded-lg shadow-lg z-[999] rotate12 absolute overflow-hidden'
                  />
                </motion.div>
              </div>

              <p className='text-base leading-relaxed'>{aboutContent}</p>

              {/* <p className='mt-3 text-base'>
                You can learn more
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='underline text-purple-700'
                  href='mailto: albert.dugba@gmail.com'
                >
                  about me {"   "}
                </a>
                my blogs{" "}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='underline text-purple-700'
                  href='https://github.com/albertdugba'
                >
                  my experience{" "}
                </a>
              </p> */}

              <div className='text-primary'>
                <p>
                  Learn more about <strong>me</strong>,
                  <strong>experiences</strong>,<strong>blog posts</strong> and{" "}
                  <strong>portfolio</strong>
                </p>
              </div>

              <div className='flex flex-col space-y-3 items-center justify-center'>
                <h1 className='mt-10 font-bold'>Connect with me on:</h1>
                <ul className='flex items-center gap-3 flex-wrap'>
                  {socialLinks.map((link) => (
                    <li key={link.url}>{link.icon}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <SpotifyWidget />
    </div>
  );
};

const socialLinks = [
  {
    url: "https://gitub.com/albertdugba",
    icon: <GithubIcon />,
  },
  {
    url: "https://linkedin.com/in/albertdugba",
    icon: <LinkedInIcon />,
  },
  {
    url: "https://twitter.com/albertdugba__",
    icon: <TwitterIcon />,
  },
];
