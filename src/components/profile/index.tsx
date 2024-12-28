import Image from "next/image";
import React from "react";
import { Overpass } from "next/font/google";

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
      <h1 className='text-lg text-gray-300 mb-6 font-medium'>
        Hi, I&apos;m Albert Dugba
      </h1>
      <p className='text-md leading-7 text-gray-300'>
        I&apos;m a software engineer and a technical writer. With over 4 years
        of experience, I have worked accross startups, agencies building
        software products and websites for web and mobile applications. I have
        worked on variety of products and projects in healthcare, web3, social,
        fintech. I excel in thriving in fast-paced environments and possesses a
        strong commitment to continuous learning and adaptation to new
        technologies.
      </p>

      {/* <p className='text-md leading-7 text-gray-300 my-6'>
        Currently, I&apos;m a{" "}
        <a
          href='https://drdogood.health'
          target='_blank'
          className='underline font-semibold text-white hover:bg-lightGreen'
        >
          Frontend Engineer at Drdogood as a contractor
        </a>{" "}
        to improve healthcare in Ghana between doctors and patients.
      </p>
      <p className='text-md leading-7 text-gray-300'>
        Prior to that, I worked as a{" "}
        <a
          href='https://montech.io'
          target='_blank'
          className='underline font-semibold text-white hover:bg-lightGreen'
        >
          Frontend Engineer at Montech Studios {}
        </a>
        where I build, managed different kinds of projects for various clients
        and needs. Before that I was part of a small team at{" "}
        <a
          href='https://origohealth.net'
          target='_blank'
          className='underline font-semibold text-white hover:bg-lightGreen'
        >
          OrigoHealth{}
        </a>{" "}
        a healthcare startup focused on connecting doctors and patients.
      </p> */}

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
