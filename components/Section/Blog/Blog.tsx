import Link from 'next/link';
import { CardList, Card, CardHeader, CardAuthor } from './styles';

const Blog = ({ posts }) => {
  return (
    <div className="container" style={{ color: '#fff' }}>
      <h1
        style={{
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="pd-1">
        I write sometimes, check out my latest posts
        <Link href="/all-posts">
          <a>View all posts</a>
        </Link>
      </h1>

      <CardList>
        {posts.map((post, idx) => (
          <Card key={idx}>
            <CardHeader>
              <Link href={`/post/[title]`} as={`/post/${post.title}`}>
                <div>
                  <p>31st March, 2021</p>
                  <a>
                    <h2>{post.title}</h2>
                  </a>
                </div>
              </Link>
            </CardHeader>
            <CardAuthor>
              <a href="#">{post.tags}</a>
            </CardAuthor>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default Blog;
