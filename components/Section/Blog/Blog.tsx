import { PostContext, Posts } from 'context/blog';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { CardList, Card, CardHeader, CardAuthor } from './styles';

const Blog = ({ posts }) => {
  console.log(posts);

  return (
    <div className="container" style={{ color: '#fff' }}>
      <h1 style={{ color: 'black' }}>
        I write sometimes, check out my latest posts{' '}
      </h1>

      <CardList>
        {posts.map(post => (
          <Card>
            <CardHeader>
              <Link href="/blog">
                <div>
                  <p>31st March, 2021</p>
                  <h2>{post.title}</h2>
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
