import FireBase from '../../styles/Icons/firebase';
import GraphQL from '../../styles/Icons/graphql';
import NextJS from '../../styles/Icons/nextjs';
import NodeJS from '../../styles/Icons/node';
import ReactJS from '../../styles/Icons/react';
import Redux from '../../styles/Icons/redux';
import Terminal from '../../styles/Icons/terminal';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
0%{
  transform:translate(5px)
}

5%{
  transform:translate(15px)
}

15%{
  transform:translate(20px)
}

25%{

  transform:translate(35px)
}
30%{

  transform:translate(45px)
}
35%{

  transform:translate(50px)
}
40%{

  transform:translate(55px)
}
45%{

  transform:translate(60px)
}
50%{

  transform:translate(65px)
}
55%{

  transform:translate(70px)
}
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  animation: ${slide} 10s linear infinite;
  padding: 1rem;

  & svg {
    padding-left: 1.2rem;
  }
`;

const Technologies = () => {
  return (
    <div className="container">
      <h1>Tools and technologies I use</h1>
      <IconsContainer>
        <FireBase width={60} height={60} color="yello" />
        <GraphQL width={60} height={60} />
        <NextJS width={60} height={60} />
        <Terminal width={60} height={60} color="black" />
        <Redux width={60} height={60} />
        <NodeJS width={60} height={60} />
        <ReactJS width={60} height={60} color="blue" />
      </IconsContainer>
    </div>
  );
};

export default Technologies;
