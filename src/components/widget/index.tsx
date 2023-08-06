import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { truncateString } from "src/utils/helpers";
import { SpotifyIcon } from "~/icons/spotify";
import { getPlayingNowQuery } from "~/spotify";

export const SpotifyWidget = () => {
  const { data: currentTrack } = useQuery(["nowPlaying"], getPlayingNowQuery);

  return (
    <div className='flex items-center justify-center lg:p-2 p-4 w-[300px]'>
      <AnimatePresence>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: currentTrack?.isPlaying ? 1 : 0 }}
          // exit={{ opacity: !currentTrack?.isPlaying ? 0 : 0 }}
          style={{
            boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(6px)",
          }}
          className='fixed right-4 mx-auto bottom-4 bg-white shadow-lg rounded-md z-[9999]'
        >
          <span className='bg-green rounded-tl-md text-xs p-1.5 m-0 text-gray-100 w-full'>
            <a
              role='tooltip'
              rel='noreferrer'
              target='_blank'
              href={currentTrack?.songUrl}
              className='underline'
            >
              {currentTrack?.isPlaying
                ? "Currently listening on spotify"
                : "Not listening"}
            </a>
          </span>

          <motion.div layout className='flex items-center'>
            {currentTrack?.isPlaying ? (
              <div className='spotify-disk relative'>
                <div className='relative'>
                  <Image
                    src={currentTrack?.albumImageUrl}
                    height={30}
                    width={30}
                    alt={`Currently playing ${currentTrack?.title}`}
                  />
                </div>
              </div>
            ) : (
              <SpotifyIcon />
            )}
            <div className='px-4'>
              <h1 className='text-sm'>
                {currentTrack?.title && truncateString(currentTrack?.title, 18)}
              </h1>
              <p className='text-gray-500 text-xs'>
                {currentTrack?.artist &&
                  truncateString(currentTrack?.artist, 20)}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
