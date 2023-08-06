import { useState } from "react";
import Image from "next/image";

import { Layout } from "../layout/layout";
import { COMPANIES } from "src/mocks/job-roles";
import { CompanyCard } from "./company-card";

export const MyExperience = () => {
  const [selected, setSelected] = useState<number>(0);

  const handleSelectCard = (index: number) => {
    setSelected(index);
  };

  return (
    <Layout title='experiences'>
      <div className='flex lg:flex-row flex-col w-full gap-20 items-start mt-20'>
        <ul className='md:w-[60%] w-full'>
          {COMPANIES.map((company, i) => (
            <CompanyCard
              key={company.id}
              data={company}
              index={i}
              onClick={() => handleSelectCard(i)}
              selected={selected}
            />
          ))}
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
