import styled from 'styled-components';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';





export const getStaticProps: GetStaticProps = async context => {
  const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
  );

  const { posts } = await graphcms.request(`
  query Posts() {
    posts {
      id
      title
      excerpt
      slug
      coverImage {
        id
        url
      }
      author {
        id
        name
      }
      date
    }
  }
  `);

  return {
    props: {
      posts,
    },
  };
};

const AllPosts = ({ posts }) => {
  console.log(posts);
  return (
    <Wrapper className='container'>
      {posts.map(post => (
        <PostCardContainer key={post.id}>
          <Link href={`/post/[slug]`} as={`/post/${post.slug}`}>
            <div className='card'>
              <div className='card-header'>
                <img src={post.coverImage.url} alt='rover' />
              </div>
              <div className='card-body'>
                <span className='tag tag-teal'>{post.slug}</span>
                <h4>{post.title}</h4>
                <h3>Posted on {post.date}</h3>
              </div>
            </div>
          </Link>
        </PostCardContainer>
      ))}
    </Wrapper>
  );
};

export default AllPosts;

const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const PostCardContainer = styled.div`
  .card {
    margin: 10px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 350px;

    .card-header img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 10px;
      height: 200px;
    }

    .tag {
      background: #cccccc;
      border-radius: 50px;
      font-size: 12px;
      margin: 0;
      color: #fff;
      padding: 2px 10px;
      text-transform: uppercase;
      cursor: pointer;
    }

    .tag-teal {
      background-color: #47bcd4;
    }
    .tag-purple {
      background-color: #5e76bf;
    }
    .tag-pink {
      background-color: #cd5b9f;
    }

    .card-body p {
      font-size: 13px;
      margin: 0 0 40px;
    }
    .user {
      display: flex;
      margin-top: auto;
    }

    .user img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .user-info h5 {
      margin: 0;
    }
    .user-info small {
      color: #545d7a;
    }
  }
`;
