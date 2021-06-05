import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ListProps {
  title: string;
  items: string[];
}
export const List: FunctionComponent<ListProps> = ({ title, items }) => (
  <Wrapper>
    <>
      <h3 className="list__header">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  </Wrapper>
);

const Wrapper = styled.section`
  @media (max-width: 850px) {
    .list__header {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  }
`;
