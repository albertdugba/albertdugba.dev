import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import cn from "classnames";

import { Layout } from "../layout/layout";
import { useCompanyStore } from "src/store";
import { COMPANIES } from "src/mocks/job-roles";
import { LinkIcon } from "~/icons/link";

export const MyExperience = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelectCard = (index: number) => {
    setSelected(index);
  };

  return (
    <Layout title='experiences'>
      <div className='flex lg:flex-row flex-col w-full gap-20 items-start mt-20'>
        <ul className='md:w-[60%] w-full'>
          {COMPANIES.map(
            (
              {
                id,
                title,
                role,
                description,
                technologies,
                duration,
                link,
                showLink,
              },
              i
            ) => (
              <li key={id} className='relative'>
                <div
                  onClick={() => handleSelectCard(i)}
                  className={cn(
                    "list-none lg:w-full w-[90%] mx-auto rounded-xl py-5 cursor-pointer p-4 flex gap-x-4 items-center",
                    {
                      "mt-5": i !== 0,
                      "hover:bg-gray-100  text-black": selected !== i,
                      "bg-primary text-grayColor": selected === i,
                    }
                  )}
                >
                  <div className='w-full'>
                    <div className='flex lg:flex-row flex-col lg:items-center items-start justify-between'>
                      {showLink ? (
                        <a rel='noreferrer' href={link} target='_blank'>
                          <div
                            className={cn("flex items-center gap-x-1", {
                              "text-white": selected === i,
                              "text-purple-700": selected !== i,
                            })}
                          >
                            <span>{role}</span>
                            <h1 className='text-base'>{title}</h1>
                            <LinkIcon />
                          </div>
                        </a>
                      ) : (
                        <div
                          className={cn("flex items-center gap-x-1", {
                            "text-white": selected === i,
                            "text-purple-700": selected !== i,
                          })}
                        >
                          <span>{role}</span>
                          <h1 className='text-base'>{title}</h1>
                          <LinkIcon />
                        </div>
                      )}

                      <span className='lg:text-sm lg:my-0 my-2 text-xs'>
                        {duration}
                      </span>
                    </div>
                    <div className='mt-3 flex flex-col'>
                      <span
                        className={cn("text-sm my-1.5", {
                          "text-gray-500": selected !== i,
                        })}
                      >
                        {description}
                      </span>
                      <ul className='gap-3 max-w-5xl my-3 inline-block'>
                        {technologies.map((stack, i) => (
                          <li
                            className='text-xs px-3 py-1 ml-2 my-1 inline-block leading-5 items-center justify-center rounded-full bg-lightPurple text-primary'
                            key={i}
                          >
                            {stack}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>

        <div className='w-[40%] items-center lg:block hidden'>
          <div className='relative aspect-square w-full bg- rounded-md'>
            <div className='sticky inset-0 lg:w-full lg:h-full h-[300px] w-[90%] right-2 left-4 bottom-20 bg-gradient-to-br p-10 rounded-2xl transition-opacity'>
              <div className='relative w-full h-full rounded-lg flex items-center justify-center'>
                <Image
                  src={COMPANIES[selected].image}
                  fill
                  alt=''
                  className='w-full h-full object-contain rounded-lg'
                />
              </div>
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
