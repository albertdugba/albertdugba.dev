import Image from "next/image";
import React from "react";
import { Overpass } from "next/font/google";

const overPass = Overpass({ subsets: ["latin"] });

export const ProfileInfo = () => {
  return (
    <div className='w-full'>
      <div className='flex gap-2 mb-6'>
        <h1
          className={`lg:text-6xl md:text-5xl text-3xl text-secondary  ${overPass.className}`}
        >
          <span>Software Engineer</span> {"  "}
        </h1>
      </div>
      <h1 className='text-lg text-lighter-gray mb-4 font-medium'>
        Hi, 👋 I&apos;m Albert Dugba
      </h1>

      <p className='lg:leading-8 leading-6 animate-fade-in'>
        I&apos;m a Senior Frontend Engineer at{" "}
        <a
          href='https://www.deciphex.com/'
          target='_blank'
          className='font-bold underline text-secondary'
        >
          Deciphex
        </a>
        , building high-end UI applications and tooling for lab pathology and
        diagnostics.
      </p>

      <p className='lg:leading-8 mt-3'>
        Previously, I was one of the founding frontend engineers at{" "}
        <a
          href='https://www.drdogood.health/'
          target='_blank'
          className='font-bold underline  text-secondary'
        >
          DrDoGood
        </a>
        , building a telemedicine platform connecting doctors and patients for
        virtual consultations and appointment scheduling. Before that, I worked at{" "}
        <a
          href='https://www.montech.io/'
          target='_blank'
          className='font-bold underline  text-secondary'
        >
          Montech Studios
        </a>
        , a software development studio, building user interfaces across web3,
        blockchain, fintech, and edtech projects. Prior to Montech, I was at{" "}
        <a
          href='https://origohealth.net/'
          target='_blank'
          className='font-bold underline text-secondary'
        >
          OrigoHealth
        </a>
        , developing digital healthcare solutions for patient care and medical
        services.
      </p>

      <p className='lg:leading-8 mt-3'>
        I&apos;m passionate about shipping impactful features while maintaining
        robust frontend infrastructure through design systems, CI/CD, and
        optimized build tools.
      </p>

      <h4 className='lg:text-lg text-sm mt-5'>Connect with me:</h4>
      <ul className='flex items-center gap-8 my-10 w-full rounded-xl'>
        {ICONS_LIST.map((icon, i) => (
          <li key={i}>
            <a href={icon.href} target='_blank'>
              <Image src={icon.image} height={30} width={30} alt='Icons' />
            </a>
          </li>
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
    image: "/icons/medium.svg",
    href: "https://medium.com/@albert.dugba",
  },
];
