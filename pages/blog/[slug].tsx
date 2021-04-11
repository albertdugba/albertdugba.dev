import { GraphQLClient } from 'graphql-request';

// const graphcms = new GraphQLClient(
//   'https://api-us-west-2.graphcms.com/v2/ckn7dbcigby0f01xrec441zrb/master'
// );

// export const getStaticProps = async ({ params }) => {
//   const { post } = await graphcms.request(
//     `
//     query PostPageQuery($slug:String!){
//         post(where: {slug:$slug}){
//             title,
//             body,
//             tags,
//         }
//     }`,
//     {
//       slug: params.slug,
//     }
//   );

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const { posts } = await graphcms.request(`{
//         posts {
//             slug
//             title
//         }

//     }`);

//   return {
//     paths: posts.map(({ slug }) => ({ params: { slug } })),
//     fallback: false,
//   };
// };

const BlogPage = ({ post }) => {
  return <h1 className="container">Blog Page:</h1>;
};

export default BlogPage;
