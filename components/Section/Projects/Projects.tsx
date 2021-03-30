import Link from 'next/link';
import { Container, ButtonLink, CardList, Card } from './styles';

const Projects = () => {
  return (
    <div style={{ background: '#201c29' }}>
      <div className="container">
        <Container>
          <div>
            <h1>I design and experiments with new technologies.</h1>
            <ButtonLink>
              <Link href="/works">
                <a>See my work</a>
              </Link>
            </ButtonLink>
          </div>

          <CardList>
            <Card>
              <header className="card-header">
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </header>
            </Card>
            <Card>
              <header className="card-header">
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </header>
            </Card>
            <Card>
              <header className="card-header">
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </header>
            </Card>
            <Card>
              <header className="card-header">
                <p>31st March, 2021</p>
                <h2>Blog Card</h2>
              </header>
            </Card>
          </CardList>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
