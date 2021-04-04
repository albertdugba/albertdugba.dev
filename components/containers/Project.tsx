import Link from 'next/link';
import styled from 'styled-components';

interface ProjectProps {
  projectImage: string;
  heading: string;
  hrefLink: string;
  linkContent: string;
}

const Project = ({
  projectImage,
  heading,
  hrefLink,
  linkContent,
}: ProjectProps) => (
  <ProjectStyles>
    <div className="project__logo">{projectImage}</div>
    <div className="project__details">
      <h3>{heading}</h3>
      <div className="project__link">
        <Link href={hrefLink}>
          <a target="_blank">{linkContent}</a>
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
  /* padding: 10px; */
  box-shadow: 0 3px 8px -2px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin: 10px;
  min-width: 30%;
  height: 15rem;

  .project__logo {
    height: 120px;
    background: #f1e9f0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 4px;
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
