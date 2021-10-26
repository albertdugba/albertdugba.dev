import Head from 'next/head';
import dynamic from 'next/dynamic';
import { IProjectProps } from '@/lib/interface';
import { Loader } from '@/common/loader/loader';
import styled from 'styled-components';

const Layout = dynamic(() => import('@/layout/Layout'), { loading: () => <Loader /> });

const About = () => {
  return (
    <Layout imageBackground="./tech-doodle.png">
      <Container className="container">
        <div className="container">
          <h1>About me</h1>
          <div>
            <p>Hi, thank you for taking for taking the time to know more about me.</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default About;

const Container = styled.div`
  height: 60vh;
  width: 100%;
  background-color: var(--primaryColor);
  border-radius: 13px;
  color: #fff;
`;
