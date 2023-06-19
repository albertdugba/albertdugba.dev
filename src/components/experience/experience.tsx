import { ReactNode, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";
import { Layout } from "../layout/layout";
import { useCompanyStore } from "src/store";
import { COMPANIES } from "./roles";

export const MyExperience = () => {
  return (
    <Layout>
      <div className='flex lg:flex-row flex-col w-full gap-20 items-start'>
        <ul className='w-full lg:py-[15vh] py-[25vh]'>
          {COMPANIES.map(({ id, title }) => (
            <li key={id} className='list-none w-full mx-auto'>
              <Title id={id}>{title}</Title>
            </li>
          ))}
        </ul>
        <div className='w-full sticky top-0 flex h-[80vh] items-center'>
          <div className='relative aspect-square w-full'>
            {COMPANIES.map((com) => (
              <com.card key={com.id} id={com.id} />
            ))}
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
        "lg:text-5xl text-2xl w-full py-16",
        isInView ? "text-black" : "text-gray-300"
      )}
    >
      {children}
    </p>
  );
};
