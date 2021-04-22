import { GetStaticProps, GetStaticPaths } from 'next';
import { GraphQLClient } from 'graphql-request';
import PostDetails from 'components/containers/PostDetails';

const Post = ({ post }) => {
  console.log(post);

  return (
    <PostDetails
      id="1"
      title="Sample Title"
      body="This is a sample body content"
      tags="netxjs"
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckn7dbcigby0f01xrec441zrb/master'
  );

  const { posts } = await graphcms.request(`
  {
    posts {
      title
      body
      tags
      id
    }
  } 
  `);

  return {
    paths: posts.map(({ title }) => ({ params: { title } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const graphcms = new GraphQLClient(
    'https://api-us-west-2.graphcms.com/v2/ckn7dbcigby0f01xrec441zrb/master'
  );

  const { posts } = await graphcms.request(
    `
    query Post($title:String!) {
    posts ( where: { title: $title } ) {
      title
      body
      tags
      id
    }
  } 
  `,
    {
      title: context.params.title,
    }
  );

  return {
    props: {
      posts,
    },
  };
};

export default Post;
