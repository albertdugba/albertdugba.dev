import { useState, useEffect, FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IProjectProps } from 'src/lib/interface';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectInfo } from './ProjectInfo';
import { ImageSlider } from '@components/common/carousel';

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
          <ShowNavbar
            initial={{ top: '-120px', width: '0', left: '-120px', boxShadow: '0' }}
            animate={{ top: '0', width: '100%', left: '0', boxShadow: '0 4px 9px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="flex align__center nav__container justify__between">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ maxWidth: '150px' }}
                src={projectImage}
                alt={slug}
              />
              <ul>
                <li style={{ listStyle: 'none' }}>
                  <a target="_blank" href={hrefLink}>
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      Visit site
                    </motion.button>
                  </a>
                </li>
              </ul>
            </div>
          </ShowNavbar>
        )}
      </div>

      <Container>
        <div className="work__carousel mr-1">
          <ImageSlider projectImages={projectImages} />
        </div>

        <div>
          <ProjectInfo
            title={title}
            jobDescription={jobDescription}
            companyInfo={companyInfo}
            challenges={challenges}
            features={features}
          />
          <div className="line__break"></div>
          <ProjectTechStack github={github} hrefLink={hrefLink} tech={tech} />
        </div>
      </Container>
    </section>
  );
};

/**
 * @styles
 */

const ShowNavbar = styled(motion.section)`
  position: fixed;
  z-index: 10;
  background-color: #fff;

  .nav__container {
    max-width: 85%;
    margin: auto;
  }
`;

const Container = styled(motion.div)`
  max-width: 85%;
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
