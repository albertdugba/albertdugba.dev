import FireBase from '../../styles/Icons/firebase';
import GraphQL from '../../styles/Icons/graphql';
import NextJS from '../../styles/Icons/nextjs';
import NodeJS from '../../styles/Icons/node';
import ReactJS from '../../styles/Icons/react';
import Redux from '../../styles/Icons/redux';
import Terminal from '../../styles/Icons/terminal';
import styled from 'styled-components';

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
