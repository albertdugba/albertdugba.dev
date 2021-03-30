import { useState } from 'react';
import { Header } from './Navigation/Header';
import Works from 'pages/works';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';
import Overview from './Section/Overview/Overview';
import Projects from './Section/Projects/Projects';
import Blog from './Section/Blog/Blog';

const Landing = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <Header setToggleMenu={setToggleMenu} />
      <NavigationMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Home />
      <Overview />
      <Projects />
      <Blog />
    </div>
  );
};

export default Landing;
