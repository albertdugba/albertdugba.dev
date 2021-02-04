import styled from 'styled-components';

const CardStyle = styled.div`
  padding: 1rem;
  box-shadow: -4px -5px 10px var(--primaryColor);
  padding-right: 30px;
  width: 100%;
  max-width: 550px;
`;

const Card = ({ children }) => {
  return <CardStyle>{children}</CardStyle>;
};

export default Card;
