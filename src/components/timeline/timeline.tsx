import { useState } from "react";
import cn from "classnames";

import { LinkedInIcon } from "~/icons/linkedin";
import { Logo } from "~/icons/logo";
import { Montech, OrigoHealth, YtakeNote } from "./timeline-content";

export const ProgressIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className='flex w-full gap-20'>
        <div className='progress-container'>
          <div className='progress-indicator'>
            {data.map((step) => (
              <li
                onClick={() => setActiveIndex(step.index)}
                className={cn("progress-step", {
                  active: activeIndex === step.index,
                  inactive: activeIndex !== step.index,
                })}
                key={step.index}
              >
                <span className='step-number'>{step.img}</span>
              </li>
            ))}
          </div>
        </div>
        <div>{data[activeIndex].component}</div>
      </div>
    </div>
  );
};

const data = [
  {
    index: 0,
    name: "Montech",
    img: <LinkedInIcon />,
    component: <Montech />,
  },
  {
    index: 1,
    name: "Origo Health",
    img: <Logo />,
    component: <OrigoHealth />,
  },
  {
    index: 2,
    name: "Ytakenote",
    img: <Logo />,
    component: <YtakeNote />,
  },
];
