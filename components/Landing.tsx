import styled from 'styled-components';

import { Header } from './Navigation/Header';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';
import Technologies from './Section/Technologies';

const Landing = () => {
  return (
    <div>
      <Header />
      <NavigationMenu />
      <Home />
      <Technologies />
    </div>
  );
};

export default Landing;
