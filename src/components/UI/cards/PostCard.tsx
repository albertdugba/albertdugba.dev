import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ICardProps } from 'types';

interface CardProps {
  image: string;
  title: string;
  date?: string;
  tags?: string[];
}

export const PostCard: FunctionComponent<CardProps> = ({ image, title, tags }) => {
  console.log(tags);
  return (
    <>
      <Container style={{ backgroundImage: `url(${image})` }}>
        <CardInfo>
          <h2>{title}</h2>
          {tags?.map((tag) => (
            <span>{tag}</span>
          ))}
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
  color: #ddd;
  z-index: 200;
  padding: 1rem;

  @media (max-width: 701px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

const Container = styled.div`
  height: 300px;
  width: 450px;
  background-size: cover;
  background-position: center;
  background: #fff;
  position: relative;
  padding: 0.9rem;
  border-radius: 12px;

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
    /* box-shadow: inset 70px 100px 120px #000000, inset 0px -10px 50px -150px #000000; */
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
