import { useState } from 'react';
import { Header } from './Navigation/Header';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';
import Technologies from './Section/Technologies';

const Landing = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <Header setToggleMenu={setToggleMenu} />
      <NavigationMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Home />
      <Technologies />
    </div>
  );
};

export default Landing;
