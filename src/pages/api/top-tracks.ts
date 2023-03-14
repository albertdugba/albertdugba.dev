/* eslint-disable import/no-anonymous-default-export */
import { NextApiResponse, NextApiRequest } from "next/types";
import { getTopTracks } from "~/spotify";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items?.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    imageUrl: track.album.images[0].url,
    title: track.name,
    id: track.id,
  }));

  return res.status(200).json({ tracks });
};
