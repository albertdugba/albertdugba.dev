import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;

  @media (max-width: 801px) {
    margin-top: 50%;
  }

  @media (min-width: 801px) {
    margin-top: 22%;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { FooterContainer, Social, FooterSocialContainer };
