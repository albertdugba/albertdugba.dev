import Image from "next/image";
import React from "react";

export const ProfileInfo = () => {
  return (
    <div className=''>
      <div className='flex gap-2 mb-6'>
        <h1 className='lg:text-6xl md:text-5xl text-3xl text-secondary'>
          <span>Software Engineer</span> {"  "}
        </h1>
      </div>
      <h1 className='text-xl text-gray-300 mb-8 font-semibold'>
        Hi, I&apos;m Albert.
      </h1>
      <p className='text-md leading-7 text-gray-300'>
        I&apos;m a software engineer based in the United Kingdom 🇬🇧, I
        specialize in developing frontend web and mobile applications. With 4
        years of experience, I&apos;ve worked across various sectors and
        organizations, from web3 and social platforms to educTech and
        healthTech.
      </p>

      <p className='text-md leading-7 text-gray-300 my-6'>
        Currently, I&apos;m a Frontend Developer at Montech Studio Inc,
        contributing to innovative product development with a focus on
        exceptional user experiences. I also dedicate time to Drdogood,
        collaborating on improving health assessment practices in Africa.
      </p>
      <p className='text-md leading-7 text-gray-300'>
        Prior to that, I was part of a small frontend team at OrigoHealth, a
        healthcare startup focused on connecting doctors and patients.
      </p>

      <ul className='flex items-center gap-8 my-10 w-full p-5 rounded-xl'>
        {ICONS_LIST.map((icon, i) => (
          <Image key={i} src={icon.image} height={30} width={30} alt='Icons' />
        ))}
      </ul>
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
    image: "/icons/instagram.svg",
    href: "https://instagram.com/albertdugba___",
  },
  {
    image: "/icons/medium.svg",
    href: "https://medium.com/@albert.dugba",
  },
];
