import { CardList, Card, CardHeader, CardAuthor } from './styles';

const Blog = () => {
  return (
    <div className="container" style={{ color: '#fff' }}>
      <h1 style={{ color: 'black' }}>
        I write sometimes, check out my latest posts{' '}
      </h1>
      <CardList>
        <Card>
          <CardHeader>
            <p>31st March, 2021</p>
            <h2>Blog Card</h2>
          </CardHeader>
          <CardAuthor>
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
          </CardAuthor>
        </Card>
        <Card>
          <CardHeader>
            <p>31st March, 2021</p>
            <h2>Blog Card</h2>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>31st March, 2021</p>
            <h2>Blog Card</h2>
          </CardHeader>
        </Card>
      </CardList>
    </div>
  );
};

export default Blog;
