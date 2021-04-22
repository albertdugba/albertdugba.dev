import styled from 'styled-components';

const Wrapper = styled.div``;

const FooterContainer = styled.footer`
  .divider {
    border-bottom: 1px solid #ddd;
    padding: 1rem;
  }

  li {
    list-style: none;
  }
  .footer__inner {
    align-items: center;
    margin-top: 1rem;

    &--links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      margin-left: 2rem;

      li {
        padding: 0.7rem;
      }

      a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 1.3rem;
      }
    }
  }

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
    margin-left: 2rem;
    cursor: pointer;
  }
`;

const FooterSocialContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { FooterContainer, Social, FooterSocialContainer };
