import cn from "classnames";
import { TCompany } from "src/types/company";
import { LinkIcon } from "~/icons/link";

interface CompanyCardProps {
  onClick: (index: number) => void;
  selected: any;
  index: number;
  data: TCompany;
}
export function CompanyCard(props: CompanyCardProps) {
  const { onClick, index, selected, data } = props;

  return (
    <li className='relative'>
      <div
        onClick={() => onClick(index)}
        className={cn(
          "list-none lg:w-full w-[90%] mx-auto rounded-xl py-5 cursor-pointer p-4 flex gap-x-4 items-center",
          {
            "mt-5": index !== 0,
            "hover:bg-gray-100  text-black": selected !== index,
            "bg-primary text-grayColor": selected === index,
          }
        )}
      >
        <div className='w-full'>
          <div className='flex lg:flex-row flex-col lg:items-center items-start justify-between'>
            {data.websiteUrl ? (
              <a rel='noreferrer' href={data.websiteUrl} target='_blank'>
                <div
                  className={cn(
                    "flex items-center gap-x-1 font-medium text-lg",
                    {
                      "text-white": selected === index,
                      "text-purple-700": selected !== index,
                    }
                  )}
                >
                  <h2>{data.role}</h2>
                  <span>@</span>
                  <h1 className='text-base'>{data.title}</h1>
                  <LinkIcon />
                </div>
              </a>
            ) : (
              <div
                className={cn("flex items-center gap-x-1 font-medium text-lg", {
                  "text-white": selected === index,
                  "text-purple-700": selected !== index,
                })}
              >
                <span>{data.title}</span>
                <span>@</span>
                <h1 className='text-base'>{data.title}</h1>
              </div>
            )}

            <span
              className={cn("text-sm lg:my-0 my-2", {
                "text-gray-500": selected !== index,
              })}
            >
              {data.duration}
            </span>
          </div>
          <div className='mt-3 flex flex-col'>
            <span
              className={cn("text-md my-1.5 leading-7", {
                "text-gray-500": selected !== index,
              })}
            >
              {data.description}
            </span>
            <ul className='gap-3 max-w-5xl my-3 inline-block'>
              {data.technologies.map((stack, i) => (
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
  );
}
