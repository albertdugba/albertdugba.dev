import styled from 'styled-components';

import { Header } from './Navigation/Header';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';

const Landing = () => {
  return (
    <div>
      <Header />
      <NavigationMenu />
      <Home />
    </div>
  );
};

export default Landing;
