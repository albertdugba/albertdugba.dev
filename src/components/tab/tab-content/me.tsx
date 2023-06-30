import { otherStacks, stacks } from "src/mocks/tect-stack";
import { CheckIcon } from "~/icons/check";

export const Me = () => {
  return (
    <div>
      <p className='text-[15px]'>
        I am Albert Dugba, a passionate web developer with nearly 4 years of
        experience. I specialize in creating exceptional online experiences for
        a diverse range of industries, including web3, social, education, and
        health. My journey into web development began in 2016 during my time in
        university, where I was introduced to Adobe Dreamweaver and became
        captivated by the power and beauty of website creation. Throughout my
        career, I have successfully delivered a wide range of projects, from
        simple marketing websites to complex solutions. Known for my
        adaptability and quick mastery of new technologies and processes, I
        thrive in fast-paced startup environments.
      </p>
      <p className='mt-2 text-[15px]'>
        Currently, I am employed as a Frontend Developer at Montech Studio Inc,
        where I contribute to the creation of innovative products with
        outstanding user experiences.
      </p>

      <p className='mt-2 text-[15px]'>
        Previously, I worked as a contractor, developing an application
        specifically designed to enhance student learning through text
        highlighting and note-taking features.
      </p>

      <p className='mt-2 text-[15px]'>
        Prior to that, I was part of a two-person frontend engineering team at
        OrigoHealth, a healthcare startup focused on connecting doctors and
        patients and delivering exceptional healthcare services. I am dedicated
        to pushing the boundaries of web development and delivering top-notch
        solutions that exceed client expectations.
      </p>

      <div className='mt-4 text-[15px]'>
        <h1>Here are a few technologies I’ve been working with recently:</h1>
        <div className='flex w-full gap-10 mt-2'>
          <ul className='space-y-1'>
            <strong className='text-primary'>Core Technologies</strong>
            {stacks.map((stack, index) => (
              <li key={index} className='flex gap-1.5 items-center'>
                <div className='w-[1.4rem] h-[1.4rem]'>
                  <CheckIcon />
                </div>
                <span className='lg:text-base text-sm'>{stack}</span>
              </li>
            ))}
          </ul>

          <ul className='space-y-1'>
            <strong className='text-primary'>Others</strong>
            {otherStacks.map((stack, index) => (
              <li key={index} className='flex gap-1.5 w-full items-center'>
                <div className='w-[1.4rem] h-[1.4rem]'>
                  <CheckIcon />
                </div>
                <span className='lg:text-base text-sm w-full'>{stack}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
