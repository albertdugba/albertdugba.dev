import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface CardProps {
  image: string;
  title: string;
  date?: string;
  tags?: string[];
}

export const PostCard: FunctionComponent<CardProps> = ({ image, title, tags, date }) => {
  return (
    <>
      <Container style={{ backgroundImage: `url(${image})` }}>
        <CardInfo>
          <div>
            <h2>{title}</h2>
            {tags?.map((tag) => (
              <span>#{tag}</span>
            ))}
          </div>

          <p className="post--meta">{date}</p>
        </CardInfo>
      </Container>
    </>
  );
};

const CardInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  color: #fff;
  z-index: 200;
  padding: 1rem;

  .post--meta {
    /* position: absolute;
    right: 0;
    /* top: 0; */
    /* bottom: 0; */
    /* height: 10%; */
    /* bottom: -90%;
    padding: 1rem;
    font-size: 1.2rem;
    color: #f7e6e6;
    border: 2px solid white;  */
  }

  span {
    display: inline-block;
    overflow-y: auto;
    padding: 0.4rem;
    font-weight: bolder;
    margin: auto;
  }

  @media (max-width: 701px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  height: 55%;
  width: 40vw;
  background-size: cover;
  background-position: center;
  background: #fff;
  position: relative;
  padding: 0.9rem;
  border-radius: 12px;
  margin-top: -1px;

  &:after {
    content: '';
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 30px 100px -120px var(--primaryColor), inset 0px -10px 50px -450px var(--primaryColor);
  }

  @media (max-width: 701px) {
    height: 250px;
    width: 350px;
    margin-top: 50px;
    h1 {
      font-size: 1rem;
    }
  }

  @media (max-width: 601px) {
    height: 320px;
    width: 270px;
    margin-top: 50px;
    h1 {
      font-size: 1rem;
    }
  }
`;
