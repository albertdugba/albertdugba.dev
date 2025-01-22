import Image from "next/image";
import React from "react";
import { Overpass } from "next/font/google";
import { AWSIcon, GoIcon } from "../icons";

const overPass = Overpass({ subsets: ["latin"] });

export const ProfileInfo = () => {
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-6'>
        <h1
          className={`lg:text-6xl md:text-5xl text-3xl text-secondary ${overPass.className}`}
        >
          <span>Software Engineer</span> {"  "}
        </h1>
      </div>
      <h1 className='text-lg text-gray-300 mb-4 font-medium'>
        Hi, I&apos;m Albert Dugba
      </h1>

      <p className='text-lg leading-8 animate-fade-in'>
        I&apos;m a frontend software engineer and technical writer with over 4
        years of experience building web and mobile applications at startups and
        agencies. I have worked on projects in healthcare, blockchain, social
        platforms, and fintech solutions.
      </p>

      <p className='text-lg leading-8 animate-fade-in delay-100 mt-3'>
        I thrive in fast-paced environments and teams that prioritize delivering
        exceptional user experiences. I&apos;m passionate about shipping
        impactful features while maintaining robust frontend infrastructure
        through design systems, CI/CD, optimized build tools.
      </p>

      {/* <p className='text-lg leading-8 mt-2'>
        Currently exploring system architecture and learning <GoIcon />,{" "}
        <AWSIcon /> to expand my technical capabilities.
      </p> */}

      <p className='text-lg leading-8 mt-2'>
        Currently exploring system architecture and learning{" "}
        <span className='inline-block transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12'>
          <GoIcon />
        </span>
        {", "}
        <span className='inline-block transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-12'>
          <AWSIcon />
        </span>{" "}
        to expand my technical capabilities.
      </p>

      <h4 className='text-lg mt-5'>Connect with me:</h4>
      <ul className='flex items-center gap-8 my-10 w-full rounded-xl'>
        {ICONS_LIST.map((icon, i) => (
          <li key={i}>
            <a href={icon.href} target='_blank'>
              <Image src={icon.image} height={30} width={30} alt='Icons' />
            </a>
          </li>
        ))}
      </ul>

      <div></div>
    </div>
  );
};

const ICONS_LIST = [
  {
    image: "/icons/linkedin.svg",
    href: "https://linkedin.com/in/albertdugba",
  },
  {
    image: "/icons/github.svg",
    href: "https://github.com/albertdugba",
  },
  {
    image: "/icons/twitter.svg",
    href: "https://twitter.com/albertdugba__",
  },
  {
    image: "/icons/medium.svg",
    href: "https://medium.com/@albert.dugba",
  },
];
