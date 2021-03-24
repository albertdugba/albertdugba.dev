import { Container } from './styles';

const Overview = () => {
  return (
    <>
      <Container className="container">
        <h1>
          I am not a designer but I do enjoy design work with the magic of CSS
        </h1>

        <div className="shapes">
          <div className="div1" id="one"></div>
          <div className="div1" id="two"></div>
          <div className="div2" id="three"></div>
          <div className="div2" id="four"></div>
        </div>
      </Container>
    </>
  );
};

export default Overview;
