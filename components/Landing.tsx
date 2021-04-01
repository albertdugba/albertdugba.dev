import { useState } from 'react';
import { Header } from './Navigation/Header';
import { NavigationMenu } from './Navigation/NavMenu';
import { Home } from './Section/Home/Home';
import Overview from './Section/Overview/Overview';
import Projects from './Section/Projects/Projects';
import Blog from './Section/Blog/Blog';
import Contact from './Section/Contact/Contact';
import Footer from './Section/Footer/Footer';

interface ToggleMenu {
  toggleMenu: boolean;
  setToggleMenu: Function;
}

const Landing = () => {
  const [toggleMenu, setToggleMenu] = useState<ToggleMenu>();
  return (
    <div>
      <Header setToggleMenu={setToggleMenu} />
      <NavigationMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Home />
      <Overview />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
