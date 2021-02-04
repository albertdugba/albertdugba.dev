import styled from 'styled-components';
import Card from '../lib/card';

const About = () => {
  return (
    <Dash id="about" className="contaier">
      <h2>About.</h2>

      <AboutContent>
        <Card>
          <h2>
            {' '}
            I enjoy software development because it allows me to express my
            creativity
          </h2>
          <h4>Hey Albert here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sed necessitatibus in odit quisquam ut illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            sed necessitatibus in odit quisquam ut illo!
          </p>
        </Card>

        <img
          src="https://avatars.githubusercontent.com/u/26843996?s=400&u=aa29a4f575b20246a4707a58bfea1f399f1bc79c&v=4"
          alt=""
        />
      </AboutContent>
    </Dash>
  );
};

const AboutContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 35px;
  img {
    order: -1;
    width: 100%;
  }
`;

const Dash = styled.div`
  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    place-self: center;
  }

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
