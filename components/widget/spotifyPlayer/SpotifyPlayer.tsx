import useSWR from 'swr';
import styled from 'styled-components';
import * as Icons from '@icons/index';

export const SpotifyPlayer = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  return (
    <Container className="container">
      <Content className="justify__between">
        <Icons.Spotify color="green" size={30} />{' '}
        <div>
          <div>{data?.artist}</div>
          <div>{data?.title}</div>
        </div>
      </Content>
    </Container>
  );
};

const Content = styled.div`
  width: 100%;

  /* gabipa1504@soulsuns.com */
`;

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  z-index: 3000;
  background: #ffff;
  color: var(--secondaryColor);
  padding: 1rem;
  border-radius: 9px;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 49px rgba(0, 0, 0, 0.8);

  @media (max-width: 701px) {
    bottom: 17px;
    left: 15px;
    width: 100%;
  }

  div {
    font-size: 0.6rem;
  }
`;

const PlayingWaves = styled.div``;
