import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

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
    <div className="project__logo">
      <Link href="/works/project1">
        <Image width="200" height="200" src={projectImage} />
      </Link>
    </div>
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
  border-radius: 4px;
  margin: 10px;
  min-width: 30%;
  height: 310px;
  box-shadow: 0px 4px 6px rgba(160, 156, 161, 0.18);
  transition: 0.5 transform ease-out;

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
