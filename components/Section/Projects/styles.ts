import styled from 'styled-components';

const ButtonLink = styled.div`
  a {
    text-decoration: none;
    display: inline-block;
    height: auto;
    border: 1px solid purple;
    padding: 1rem 3rem;
    background: purple;
    font-family: inherit;
    color: #fff;

    &:hover {
      background-color: violet;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  /* background: #17141d; */
  color: #fff;
  padding: 1rem;
`;

const Card = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 390px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #17141d;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1rem);
  }

  &:hover ~ & {
    transform: translateX(50px);
  }

  &::not(:first-child) {
    margin-left: -30px;
  }
`;
const CardList = styled.section`
  display: flex;
  padding: 3rem;
  width: 60%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25) inset -2px -2px 2px
      rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(90deg, #201c29, #201c29);
  }
`;

const CardAuthor = styled.div``;
const AuthorAvatar = styled.a``;
const AuthorName = styled.div``;
const AuthorNamePrefix = styled.div``;
const Tags = styled.div``;

export { Container, ButtonLink, Card, CardList };
