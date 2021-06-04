import Link from 'next/link';
import { CardList, Card, CardHeader, CardAuthor } from './styles';
import { FunctionComponent } from 'react';
interface PostProps {
  posts: any[];
}

const Blog: FunctionComponent<PostProps> = ({ posts }) => {
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
        <Link href="/posts">
          <a>View all posts</a>
        </Link>
      </h1>

      <CardList>
        {posts.map((post, idx) => (
          <Card key={idx}>
            <CardHeader>
              <Link href={`/post/[slug]`} as={`/post/${post.slug}`}>
                <div>
                  <p>{post.date}</p>
                  <a>
                    <h2>{post.title}</h2>
                  </a>
                </div>
              </Link>
            </CardHeader>
            <CardAuthor>{/* <a href="#">{post.tags}</a> */}</CardAuthor>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default Blog;
