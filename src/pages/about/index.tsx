import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";
import { BlogLayout } from "~/components/layout";
import { motion } from "framer-motion";
import profileImage from "../../../public/assets/albertdugba.webp";
import { Icon } from "@iconify/react";
import { GithubIcon } from "~/icons/github";
import { LinkedInIcon } from "~/icons/linkedin";
import { TwitterIcon } from "~/icons/twitter";
import { TabComponent } from "~/components/tab";

const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return <Image {...props} ref={ref} alt='' />;
  }
);

const MotionImage = motion(ExoticImage);

const About = () => {
  return (
    <BlogLayout title='about'>
      <div className='max-w-5xl mx-auto flex gap-10 p-8 lg:mt-10 -mt-20 bg-'>
        <div className='transition-all relative rounded-md lg:block hidden'>
          <motion.div
            initial={{
              rotate: "24deg",
              backgroundColor: "#fff",
            }}
            animate={{
              rotate: "-12deg",
              backgroundColor: "#dbb4e0",
            }}
            className='-rotate-12 relative h-48 w-48 transition-all rounded-md shadow-xl'
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

          <ul className='flex items-center justify-center gap-3 flex-wrap my-8'>
            {socialLinks.map((link) => (
              <li key={link.url}>{link.icon}</li>
            ))}
          </ul>
        </div>

        <div className='w-full'>
          <TabComponent defaultIndex={0} />
        </div>
      </div>
    </BlogLayout>
  );
};

export default About;

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
