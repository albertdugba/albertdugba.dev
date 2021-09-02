import { useState, useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IProjectProps } from 'src/lib/interface';
import { ImageSlider } from '@components/common/carousel';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectInfo } from './ProjectInfo';

export const WorkDetails: FunctionComponent<IProjectProps> = ({
  title,
  hrefLink,
  projectImages,
  projectImage,
  slug,
  companyInfo,
  jobDescription,
  features,
  challenges,
  tech,
  github,
}) => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else setShowNav(false);
    });
    return () =>
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setShowNav(true);
        } else setShowNav(false);
      });
  }, []);
  return (
    <section>
      <div className={showNav ? 'nav__bg' : ''}>
        {showNav && (
          <ShowNavbar>
            <div className="flex align__center justify__between container">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ maxWidth: '150px' }}
                src={projectImage}
                alt={slug}
              />
              <ul>
                <li style={{ listStyle: 'none' }}>
                  <Link href={hrefLink}>
                    <a target="_blank">
                      <button>Visit site</button>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </ShowNavbar>
        )}
      </div>

      <Container className="container">
        <div className="container work__carousel mr-1">
          <ImageSlider projectImages={projectImages} />
        </div>

        <div>
          <ProjectTechStack title={title} github={github} hrefLink={hrefLink} tech={tech} />
          <ProjectInfo
            jobDescription={jobDescription}
            companyInfo={companyInfo}
            challenges={challenges}
            features={features}
          />
        </div>
      </Container>
    </section>
  );
};

/**
 * @styles
 */

const ShowNavbar = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.2);
`;

const Container = styled(motion.div)`
  max-width: 80%;
  margin: auto;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;

  .wordDetails span {
    font-size: 1.2rem;
    font-weight: bolder;
  }
`;
