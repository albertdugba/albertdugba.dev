import styled from 'styled-components';

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
  width: 100%;
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
`;

const CardHeader = styled.header`
  h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    text-decoration: none;
    color: inherit;
    border: 0;
    display: inline-block;
    cursor: pointer;
  }

  &:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const CardAuthor = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 75x 1fr;
  align-items: center;
  margin: 3rem 0 0;
`;
const AuthorAvatar = styled.a`
  grid-area: auto;
  align-self: start;
  position: relative;
  box-sizing: border-box;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: grayscale(100%);
    display: block;
    overflow: hidden;
    margin: 16px 10px;
  }
`;
const AuthorName = styled.div`
  grid-area: auto;
  box-sizing: border-box;
`;
const AuthorNamePrefix = styled.div`
  font-weight: normal;
  color: #7a7a8c;
`;
const Tags = styled.div`
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  margin-bottom: 0;

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 0.5rem;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: 0.66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: 0.2rem 0.85rem 0.25rem;
    position: relative;

    &:hover {
      background: linear-gradient(90deg, #ff8a00, #e52e71);
      text-shadow: none;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-box-decoration-break: clone;
      background-clip: text;
      border-color: white;
    }
  }
`;

export {
  Card,
  CardList,
  CardHeader,
  CardAuthor,
  AuthorAvatar,
  AuthorName,
  AuthorNamePrefix,
  Tags,
};
