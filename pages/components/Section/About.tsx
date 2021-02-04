import styled from 'styled-components';

const About = () => {
  return (
    <Dash id="about">
      <h1>About Page</h1>
    </Dash>
  );
};

const Dash = styled.div`
  &:before,
  &:after {
    display: grid;
    grid-template-columns: 1fr;
    background-color: red;
  }
`;

export default About;
