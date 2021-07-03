import { FunctionComponent, ReactNode } from 'react';

interface Iprops {
  main: ReactNode;
}

const Layout: FunctionComponent<Iprops> = ({ main }) => {
  return <main>{main}</main>;
};

export default Layout;
