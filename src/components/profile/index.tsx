import React from "react";

export const ProfileInfo = () => {
  return (
    <div className=''>
      <div className='flex gap-2 mb-6'>
        <h1 className='text-6xl text-secondary'>
          <span>Software Engineer</span> {"  "}
        </h1>
      </div>
      <h1 className='text-xl text-gray-300'>Hi, I&apos;m Albert.</h1>
      <p className='text-md leading-7 text-gray-300'>
        Iam a software engineer based in the United Kingdom 🇬🇧, I specialize in
        developing frontend web and mobile applications. With over four years of
        experience, I&apos;ve worked across various sectors, from web3 and
        social platforms to educTech and healthTech.
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
    </div>
  );
};
