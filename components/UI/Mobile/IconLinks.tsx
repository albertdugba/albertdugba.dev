import { SocialLinks } from 'components/containers/Social';
import Dev from 'styles/Icons/dev';
import Github from 'styles/Icons/github';
import LinkedIn from 'styles/Icons/linkedin';
import Twitter from 'styles/Icons/twitter';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IconLinks = () => {
  return (
    <>
      <Wrapper
        className='container'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: '49px' }}
        exit={{ opacity: 0 }}
      >
        <SocialLinks
          link='link'
          component={<Github size={25} color='#fff' />}
        />

        <SocialLinks
          className='ml-1'
          link='link'
          component={<LinkedIn size={22} color='#fff' />}
        />
        <SocialLinks
          className='ml-1'
          link='link'
          component={<Twitter size={22} color='#fff' />}
        />
        <SocialLinks
          className='ml-1'
          link='link'
          component={<Dev size={22} color='#fff' />}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  display: none;
  z-index: 30000000;

  svg {
    margin-top: 0.3rem;
  }

  @media (max-width: 701px) {
    display: flex;
    z-index: 200;
    background: var(--secondaryColor);
    border-radius: 8px;
    padding: 0.45rem;
    height: 49px;
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    left: 0;

    &:before {
      content: '';
      position: absolute;
      top: -5px;
      width: 20px;
      height: 20px;
      background: var(--secondaryColor);
      transform: rotate(45deg);
    }
  }
`;
