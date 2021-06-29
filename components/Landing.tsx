import { Home } from './Section/Home/Home';

const Landing = ({ posts, works }) => {
  return (
    <div>
      <Home works={works} posts={posts} />
      <Home works={works} posts={posts} />
    </div>
  );
};

export default Landing;
