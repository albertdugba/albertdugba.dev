import { useState } from 'react';
import { Header } from './Navigation/Header';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';
import Overview from './Section/Overview/Overview';

const Landing = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <Header setToggleMenu={setToggleMenu} />
      <NavigationMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Home />
      <Overview />
    </div>
  );
};

export default Landing;
