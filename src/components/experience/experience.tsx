import { ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import cn from "classnames";
import { Layout } from "../layout/layout";
import { useCompanyStore } from "src/store";
import { COMPANIES } from "./roles";
import { FeaturedCard } from "./featured-card";

export const MyExperience = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelectCard = (index: number) => {
    setSelected(index);
  };

  return (
    <Layout>
      <div className='flex lg:flex-row flex-col w-full gap-20 items-start mt-10'>
        <ul className='w-full'>
          {COMPANIES.map(
            ({ id, title, role, description, technologies }, i) => (
              <li key={id} className='relative'>
                <div
                  onClick={() => handleSelectCard(i)}
                  className={`list-none lg:w-full w-[90%] mx-auto rounded-xl py-5 cursor-pointer ${
                    i !== 0 && "mt-5"
                  } ${selected !== i && "hover:bg-gray-100"} ${
                    selected === i ? "bg-primary" : ""
                  } p-4 flex gap-x-4 items-center`}
                >
                  <div className='w-full'>
                    <h1 className='text-2xl'>{title}</h1>
                    <div className='mt-3'>
                      <span className='text-sm'>{role}</span>
                      <span className='text-sm'>{description}</span>
                      <ul className='flex items-center gap-3 max-w-5xl my-3 inline-block'>
                        {technologies.map((stack, i) => (
                          <li
                            className='text-xs px-3 py-1 inline-block leading-5 items-center justify-center rounded-full bg-primary opacity-20'
                            key={i}
                          >
                            {stack}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {selected === i && (
                  <div className='h-10 w-10 absolute -right-10 top-[70%] flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <path
                        fill='var(--primaryColor)'
                        d='M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z'
                      />
                    </svg>
                  </div>
                )}
              </li>
            )
          )}
        </ul>

        <div className='w-full flex items-center'>
          <div className='relative aspect-square w-full bg-primary rounded-md'>
            <div className='lg:absolute lg:inset-0 fixed lg:w-full lg:h-full h-[300px] w-[90%] right-2 left-4 bottom-20 bg-gradient-to-br p-10 rounded-2xl transition-opacity'>
              {COMPANIES[selected].title}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Title = ({ children, id }: { children: ReactNode; id: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewFunc = useCompanyStore((state) => state.setInViewCompany);

  useEffect(() => {
    if (isInView) setInViewFunc(id);
  }, [id, isInView, setInViewFunc]);

  return (
    <p
      ref={ref}
      className={cn(
        "lg:text-5xl text-3xl w-full py-16",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
};
