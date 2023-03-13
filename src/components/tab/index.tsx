import { FC, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import { SpotifyIcon } from "~/icons/spotify";
import { InfoIcon } from "~/icons/info";
import { BookIcon } from "~/icons/book";
import { Me, MyReads, SpotifyPlayLists } from "./tab-content";

interface TabProps {
  defaultIndex: number;
}

export const TabComponent: FC<TabProps> = ({ defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeIndex].color
    );
  }, [activeIndex]);

  useEffect(() => {
    const tabFromHash = tabs.findIndex(
      (tab) => `#tab?=${tab.id}` === window.location.hash
    );
    setActiveIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
  }, [defaultIndex]);

  return (
    <div className='bg-white rounded-lg'>
      <AnimatePresence>
        <ul className='flex w-full rounded-md -mt-6' role='tablist'>
          {tabs.map((tab, idx) => (
            <div
              key={tab.id}
              className={cn("tab", {
                active: activeIndex === idx,
              })}
            >
              <motion.li role='presentation'>
                <a
                  className='w-full flex items-center justify-center text-center'
                  href={`#tab?=${tab.id}`}
                  onClick={() => handleClickTab(idx)}
                >
                  {tab.icon}
                  <motion.span className='lg:text-sm text-xs lg:block hidden'>
                    {tab.title}
                  </motion.span>
                </a>
              </motion.li>
              <div className='h-[1px] bg-gray-300 w-full'></div>
              {activeIndex === idx && (
                <div
                  style={{ background: "var(--active-color)" }}
                  className='h-[2px] w-full'
                />
              )}
            </div>
          ))}
        </ul>
        <section className='py-4 px-3 rounded-md'>
          {tabs[activeIndex].component}
        </section>
      </AnimatePresence>
    </div>
  );
};

const tabs = [
  {
    title: "Me",
    id: "me",
    icon: <InfoIcon />,
    color: "var(--primaryColor)",
    component: <Me />,
  },
  {
    title: "My Reads",
    id: "books",
    icon: <BookIcon />,
    color: "var(--redColor)",
    component: <MyReads />,
  },
  {
    title: "My Playlists",
    id: "playlists",
    icon: <SpotifyIcon />,
    color: "var(--greenColor)",
    component: <SpotifyPlayLists />,
  },
];
