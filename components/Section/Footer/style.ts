import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 40%;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 1.2rem;
    cursor: pointer;
  }
`;

const FooterSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { FooterContainer, Social, FooterSocialContainer };
