import { CardContainer } from 'components/Section/Home/styles';
import styled from 'styled-components';

export const ProjectCard = () => {
  return (
    <div className='container'>
      <CardContainer>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </CardContainer>
    </div>
  );
};

const Card = styled.div`
  margin-top: 40px;
  height: 350px;
  justify-content: center;
  width: 100%;
  max-width: 550px;
  color: #000;
  border-radius: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  background: linear-gradient(150deg, #e1e1e1, #1d161f 100%);
`;
