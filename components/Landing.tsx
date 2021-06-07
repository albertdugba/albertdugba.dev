import { Home } from './Section/Home/Home';
import Overview from './Section/Overview/Overview';
import Projects from './Section/Projects/Projects';
import Blog from './Section/Blog/Blog';
import Contact from './Section/Contact/Contact';
import Footer from './Section/Footer/Footer';

const Landing = ({ posts }) => {
  return (
    <div>
      <Home />
      <Overview />
      <Projects posts={posts} />
      {/* <Blog posts={posts} /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
