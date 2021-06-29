import { Container, Card } from './styles';
import { FunctionComponent } from 'react';
import { GraphQLClient } from 'graphql-request';
import { motion } from 'framer-motion';

interface Props {
  works: any[];
}

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { works } = await graphcms.request(`
  query Works(){
    works {
      title
      linkContent
      projectImage
      hrefLink
      slug
    }
  }
  `);

  return {
    props: {
      works,
    },
  };
};

const Projects: FunctionComponent<Props> = ({ works }) => {
  return (
    <Container>
      {works?.map((work, idx) => (
        <Card key={idx}>
          <img
            src={work.projectImage}
            alt={work.title}
            style={{ width: '100%', maxWidth: '200px' }}
          />
          <div>
            <h2>{work.title}</h2>
            <span>React</span>
          </div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '20%' }}
            className='card__overlay'
          >
            <span>View Project</span>
          </motion.div>
        </Card>
      ))}
    </Container>
  );
};

export default Projects;
