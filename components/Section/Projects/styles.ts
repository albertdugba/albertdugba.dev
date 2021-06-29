import styled from 'styled-components';

const Container = styled.div`
  background: var(--primaryColor);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  max-width: 20%;
  width: 100%;
  height: 60vh;
  padding: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 12px;
  background: #20002c;
  color: #fff;
  cursor: pointer;
  background: -webkit-linear-gradient(to bottom, #cbb4d4, #20002c);
  background: linear-gradient(to bottom, #cbb4d4, #20002c);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: right;
  position: relative;
  overflow: hidden;

  .card__overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 50%;
    left: 0;
    bottom: 10%;
    background: #20002c;
    color: #fff;
    /* cursor: pointer;
    background: -webkit-linear-gradient(to bottom, #cbb4d4, #20002c);
    background: linear-gradient(to bottom, #cbb4d4 #20002c); */
    z-index: 10;
    border-radius: 12px;
    display: none;

    & :hover {
      display: none;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      font-size: 1.3rem;
    }
  }
`;

export { Container, ContentBody, Card };
