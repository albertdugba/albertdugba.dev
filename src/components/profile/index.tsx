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
        virtual consultations and appointment scheduling. Before that, I worked
        at{" "}
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
        Beyond product engineering, I specialize in developer tooling, design
        systems, CI/CD, and frontend infrastructure, with a focus on improving
        developer experience and building systems that scale across teams and
        products.
      </p>

    </div>
  );
};
