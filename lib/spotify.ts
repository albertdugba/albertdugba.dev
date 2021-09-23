import querystring from 'querystring';

const client_id = 'ab8ac3d55d8347d19ef6e2a83cf518fb';
const client_secret = '515029fd9a6847a8ac1c6d52960ebd57';
const refresh_token =
  'AQA2mkqu9S52z6u-sTKyqVqbrrVwGCXbkk4l30uElK-2XjgQlFxiXWn_oL3Ltnydtui7iLbCZKCLf-tKSf8l8BcxqoxeFFvZ-dY03uVSMZGypGzgHY36djk9BfO8yRDN6dI';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
