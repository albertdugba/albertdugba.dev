import styled from 'styled-components';
import Card from '../lib/card';

const About = () => {
  return (
    <Dash id="about">
      <h2>ABOUT Page</h2>
      <Card>
        <h4>My name is </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed
          necessitatibus in odit quisquam ut illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed
          necessitatibus in odit quisquam ut illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed
          necessitatibus in odit quisquam ut illo!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sed
          necessitatibus in odit quisquam ut illo!
        </p>
      </Card>
    </Dash>
  );
};

const Dash = styled.div`
  h2 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
  }

  h2:before,
  h2:after {
    display: block;
    content: '';
    background: linear-gradient(to left, var(--primaryColor), transparent);
    height: 10px;
  }

  h2:after {
    background: linear-gradient(to right, var(--primaryColor), transparent);
  }
`;

export default About;
