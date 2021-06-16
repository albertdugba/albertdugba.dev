import Link from 'next/link';
import { Container, ContentBody } from './styles';
import { FunctionComponent } from 'react';

interface PostProps {
  posts: any[];
}

const Projects: FunctionComponent<PostProps> = ({ posts }) => {
  return (
    <Container>
      <ContentBody className='container'>
        <div className='card'>
          <div>
            <h1>I build and experiment</h1>
            <h3>About open source, web applications etc</h3>
          </div>
          <div className='card__footer'>
            <Link href='/works'>
              <button>see my work</button>
            </Link>
          </div>
        </div>
        <div style={{ height: '100%', width: '2px', background: '#fff' }} />
        <div className='card'>
          <div>
            <h1>I write sometimes </h1>
            <h3>About frontend development, tools etc</h3>
          </div>
          <div className='card__footer'>
            <Link href='/posts'>
              <button>View all posts</button>
            </Link>
          </div>
        </div>
      </ContentBody>
    </Container>
  );
};

export default Projects;
