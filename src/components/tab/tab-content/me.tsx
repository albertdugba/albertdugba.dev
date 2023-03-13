import { otherStacks, stacks } from "src/mocks/tect-stack";
import { CheckIcon } from "~/icons/check";

export const Me = () => {
  return (
    <div>
      <p>
        Hello! My name is Albert Dugba and I enjoy putting stuff together to
        create something nice on the internet. My interest in web development
        started back in 2016 in level 200 when I got introduced to adobe
        dreamweaver to create websites. Seeing how powerful and stunning it is
        to create websites fuelled my curiosity.In the end, it turned out to be
        something that I loved very much.
      </p>
      <p className='mt-2'>
        In the last three years or more, I have developed various products for a
        variety of companies, including both simple marketing websites to
        complex solutions.
      </p>

      <p className='mt-2'>
        With a strong background in the domains of web3, social, education and
        health industries, I have honed my skills in fast-paced startup
        environments and are known for my ability to adapt quickly to new
        technologies and processes
      </p>

      <p className='mt-2'>
        Currently, I work at{" "}
        <strong className='text-primary'>Montech Studio Inc</strong> as a
        Frontend Developer to create variety of products with great user
        experiences.
      </p>
      <p className='mt-2'>
        Before now, I worked as a contractor to work on application(a text
        highlighting and note taking application) to aid students to learn
        effectively
      </p>
      <p className='mt-2'>
        Prior to doing freelance work, I was part of a team of 2 frontend
        engineers at <strong className='text-green'>OrigoHealth</strong>, a
        health startup to help connect doctors and patients and provide provide
        healthcare services.
      </p>

      <div className='mt-4'>
        <h1>Here are a few technologies I’ve been working with recently:</h1>
        <div className='flex w-full gap-10 mt-2'>
          <ul className='space-y-1'>
            <strong className='text-primary'>Core Technologies</strong>
            {stacks.map((stack, index) => (
              <li key={index} className='flex gap-1.5 items-center'>
                <CheckIcon />
                <span>{stack}</span>
              </li>
            ))}
          </ul>

          <ul>
            <strong className='text-primary'>Others</strong>
            {otherStacks.map((stack, index) => (
              <li key={index} className='flex gap-1.5 items-center'>
                <CheckIcon />
                <span>{stack}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
