import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { truncateString } from "src/utils/helpers";
import { getTopTracksQuery } from "~/spotify";

export const SpotifyPlayLists = () => {
  const { data: topTracks } = useQuery(["topTracks"], getTopTracksQuery);

  return (
    <div>
      <h1>My Top Spotify Tracks Tracks</h1>

      <ul>
        {topTracks?.map((track, index) => (
          <li
            key={track.id}
            className='flex items-center space-x-2 rounded-md my-2'
          >
            <span>{index + 1}</span>
            <div className='flex items-center space-x-2'>
              <div className='h-[50px] w-[50px] relative'>
                <Image
                  src={track.imageUrl}
                  height={50}
                  width={50}
                  blurDataURL={track.imageUrl}
                  alt={track.title}
                  className='object-cover rounded-md'
                />
              </div>
              <div className='flex items-start justify-start flex-col h-[50px] p-0 m-0'>
                <p className='text-base'>
                  {track.title && truncateString(track.title, 30)}
                </p>
                <p className='text-sm text-gray-500'>{track.artist}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
