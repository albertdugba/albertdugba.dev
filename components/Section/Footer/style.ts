import styled from 'styled-components';

const FooterContainer = styled.footer`
  .divider {
    border-top: 1px solid #ddd;
    max-width: 96%;
    margin: auto;
    padding: 1rem;

    @media (max-width: 901px) {
      width: 95%;
    }
  }

  li {
    list-style: none;
    padding: 1rem;
  }
  .footer__inner {
    margin-top: 1rem;

    &--links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;

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

  @media (max-width: 653px) {
    display: none;
  }
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
