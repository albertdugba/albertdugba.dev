export interface ISpotifyResponse {
  id: string;
  artist: string;
  songUrl: string;
  title: string;
  imageUrl: string;
}

export interface IPlayingNow {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}
