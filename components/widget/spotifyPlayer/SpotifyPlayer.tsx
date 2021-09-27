import useSWR from 'swr';
import styled from 'styled-components';
import * as Icons from '@icons/index';

export const SpotifyPlayer = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  return (
    <Container className="container">
      <div className="justify__between">
        <div className="spotify__icon">
          <Icons.Spotify color="#1DB954" size={30} />{' '}
        </div>

        <SpotifyData isPlaying={data?.isPlaying}>
          {!data?.isPlaying ? (
            <h3>Not Playing</h3>
          ) : (
            <a target="_blank" href={data?.songUrl}>
              <div>{data?.artist}</div>
              <div>{data?.title.length > 35 ? data?.title.substring(0, 20) : data?.title}</div>
            </a>
          )}
        </SpotifyData>
      </div>
    </Container>
  );
};

interface IPlaying {
  isPlaying: boolean;
}

const SpotifyData = styled.div<IPlaying>`
  position: relative;
  font-size: 0.75rem;
  background: #ffff;
  width: 230px;
  border-radius: 8px;
  height: 50px;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  color: #000;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 601px) {
    width: 90%;
  }

  &:before {
    position: absolute;
    content: '${(props) => (props.isPlaying ? 'listening now' : 'not playing')}';
    top: 0;
    right: 0;
    width: 50%;
    height: 28%;
    border-top-right-radius: 8px;
    background: #1db954;
    opacity: 0.8;
    padding-left: inherit;
    margin-left: inherit;
    color: #fff;
    text-transform: uppercase;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 15px;
  left: 40px;
  z-index: 3000;
  padding: 1rem;
  border-radius: 9px;

  @media (max-width: 701px) {
    bottom: 75px;
    left: 10px;
    width: 75%;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .spotify__icon {
    background: #ffff;
    height: 50px;
    width: 45px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 701px) {
      width: 60px;
    }
  }
`;
