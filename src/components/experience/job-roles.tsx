import { FeaturedCard } from "./featured-card";
import { JOB_ROLES } from "./roles";

type CardProps = {
  id: string;
};

export const MontechCard = ({ id }: CardProps) => (
  <FeaturedCard id={id} gradient='from-[#060407] to-[#734de6]'>
    <ul>
      {JOB_ROLES.MONTECH.roles.map((role, index) => (
        <li
          key={index}
          className='flex items-center gap-x-2 text-black bg-white px-5 py-5 w-full rounded-md my-2'
        >
          <div className='flex items-center  text-white text-sm justify-center rounded-md bg-[#734de6] w-8 h-8'>
            <span>{index + 1}</span>
          </div>
          <div className='rounded-md w-full'>
            <p className='text-sm'>{role}</p>
          </div>
        </li>
      ))}
    </ul>
  </FeaturedCard>
);

export const YtakeNoteCard = ({ id }: CardProps) => (
  <FeaturedCard id={id} gradient='from-[#204d39] to-[#ac8e4e]'>
    Ytakenote
  </FeaturedCard>
);

export const OrigoHealth = ({ id }: CardProps) => (
  <FeaturedCard id={id} gradient='from-[#d0eade] to-[#2b805d]'>
    <ul>
      {JOB_ROLES.ORIGO_HEALTH.roles.map((role, index) => (
        <li
          key={index}
          className='flex items-center gap-x-2 text-black bg-white px-5 py-5 w-full rounded-md my-2'
        >
          <div className='flex items-center  text-white text-sm justify-center rounded-md bg-[#2b805d] w-8 h-8'>
            <span>{index + 1}</span>
          </div>
          <div className='rounded-md w-full'>
            <p className='text-sm'>{role}</p>
          </div>
        </li>
      ))}
    </ul>
  </FeaturedCard>
);
