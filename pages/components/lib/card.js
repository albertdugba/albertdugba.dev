import styled from 'styled-components';

const CardStyle = styled.div`
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.18) 0px -2px -4px;
`;

const Card = ({ children }) => {
  return <CardStyle>{children}</CardStyle>;
};

export default Card;
