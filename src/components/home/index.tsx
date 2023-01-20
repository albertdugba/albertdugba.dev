export const HomePage = () => {
  return (
    <div className='relative'>
      <div className='flex items-center justify-between w-screen h-screen bg'>
        <div className='text-primary p-6 lg:w-[650px] w-full mx-auto absolute inset-x-0  md:w-3/5 z-20  -mt-10 '>
          <div className='bg-gradient-to-r from-[#f5deed] to-[#f9f7f9] shadow-xl p-8 rounded-lg'>
            <h1 className='flex items-center justify-center h-full w-full'>
              I am a frontend engineer with 4 years of experience building
              advanced web applications using React and TypeScript. My expertise
              lies in the web3, social, and health industries. I am experienced
              in working in fast-paced startup environments and able to adapt
              quickly to new technologies and processes.
            </h1>

            {/* <p>Learn more about me, my works and my articles</p> */}
            <h1 className='mt-10 font-bold'>Stacks</h1>
            <ul className='flex items-center gap-3 flex-wrap'>
              {stacks.map((stack, idx) => (
                <li
                  className='px-2 py-0.5 bg-purple-600 text-purple-300 lg:my-3 my-0 w-fit text-sm rounded-md'
                  key={idx}
                >
                  {stack}
                </li>
              ))}
            </ul>
          </div>
          {/* <p>featured blog</p>
          <div className='bg-gradient-to-r from-[#f5deed] to-[#f9f7f9] shadow-xl p-8 rounded-lg mt-8'>
            <h1>Come back</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const stacks = [
  "Nextjs",
  "Typescript",
  "JavaScript",
  "Redux",
  "React Query",
  "Storybook",
];
