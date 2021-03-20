import { useState } from 'react';
import { Header } from './Navigation/Header';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';

const Landing = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <Header setToggleMenu={setToggleMenu} />
      <NavigationMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Home />
    </div>
  );
};

export default Landing;
