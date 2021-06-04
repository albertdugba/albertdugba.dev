import { FunctionComponent } from 'react';

interface ListProps {
  title: string;
  items: string[];
}
export const List: FunctionComponent<ListProps> = ({ title, items }) => (
  <section>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </section>
);
