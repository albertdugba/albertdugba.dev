import Link from 'next/link';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

interface ProjectProps {
  projectImage: string;
  title: string;
  hrefLink: string;
  linkContent: string;
  slug: string;
}

const Project: FunctionComponent<ProjectProps> = ({
  projectImage,
  title,
  hrefLink,
  linkContent,
  slug,
}) => (
  <ProjectStyles>
    <Link href='/work/[slug]' as={`/work/${slug}`}>
      <div className='project__logo'>
        <a>
          <img
            style={{ width: '100%', height: 'auto', maxWidth: '250px' }}
            src={projectImage}
          />
        </a>
      </div>
    </Link>
    <div className='project__details'>
      <h3>{title}</h3>
      <div className='project__link'>
        <Link href={hrefLink} as={hrefLink}>
          <a target='_blank'>{linkContent}</a>
        </Link>
      </div>
    </div>
  </ProjectStyles>
);

export default Project;

/**
 * @styles
 */

const ProjectStyles = styled.div`
  border-radius: 4px;
  margin: 10px;
  min-width: 30%;
  height: 310px;
  box-shadow: 0px 4px 8px rgba(160, 156, 161, 0.18);
  transition: 0.5s transform ease-out;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    object-fit: contain;
    height: auto;
  }

  .project__logo {
    height: 180px;
    background: #f6f3f6;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    transition: background 0.4s ease-out;
  }

  .project__details {
    padding: 1rem;
  }

  .project__link a {
    display: block;
    height: 100%;
    text-decoration: none;
    color: #300b3b;
  }
`;
