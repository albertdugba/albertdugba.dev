import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ListProps {
  title: string;
  items: string[];
}
export const List: FunctionComponent<ListProps> = ({ title, items }) => (
  <section>
    <h3>{title}</h3>
    <Wrapper>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Wrapper>
  </section>
);

const Wrapper = styled.div`
  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    li {
      list-style: none;
      padding: none;
      margin: none;
    }
  }
`;
