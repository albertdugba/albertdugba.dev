// import styled from 'styled-components';
// import { GraphQLClient } from 'graphql-request';
// import { GetStaticProps, InferGetStaticPropsType } from 'next';
// import Link from 'next/link';

// export const getStaticProps: GetStaticProps = async () => {
//   const graphcms = new GraphQLClient(
//     'https://api-us-east-1.graphcms.com/v2/ckovyil8d2u6801xq3snb4dss/master'
//   );

//   const { posts } = await graphcms.request(`
//   query Posts() {
//     posts {
//       id
//       title
//       excerpt
//       slug
//       coverImage {
//         id
//         url
//       }
//       author {
//         id
//         name
//       }
//       date
//     }
//   }
//   `);

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// const AllPosts = ({ posts }) => {
//   return (
//     <Wrapper className='container'>
//       {posts.map(post => (
//         <PostCardContainer key={post.id}>
//           <Link href={`/post/[slug]`} as={`/post/${post.slug}`}>
//             <div className='card'>
//               <div className='card-header'>
//                 <img src={post.coverImage.url} alt='rover' />
//               </div>
//               <div className='card-body'>
//                 <span className='tag tag-teal'>{post.slug}</span>
//                 <h4>{post.title}</h4>
//                 <h3>Posted on {post.date}</h3>
//               </div>
//             </div>
//           </Link>
//         </PostCardContainer>
//       ))}
//     </Wrapper>
//   );
// };

// export default AllPosts;

// const Wrapper = styled.div`
//   margin-top: 100px;
//   display: grid;
//   place-items: center;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
// `;

// const PostCardContainer = styled.div`
//   .card {
//     margin: 10px;
//     background: #fff;
//     border-radius: 6px;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
//     overflow: hidden;
//     width: 300px;

//     .card-header img {
//       width: 100%;
//       height: 200px;
//       object-fit: cover;
//     }

//     .card-body {
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: flex-start;
//       padding: 10px;
//       height: 200px;
//     }

//     .tag {
//       background: #cccccc;
//       border-radius: 50px;
//       font-size: 12px;
//       margin: 0;
//       color: #fff;
//       padding: 2px 10px;
//       text-transform: uppercase;
//       cursor: pointer;
//     }

//     .tag-teal {
//       background-color: #47bcd4;
//     }
//     .tag-purple {
//       background-color: #5e76bf;
//     }
//     .tag-pink {
//       background-color: #cd5b9f;
//     }

//     .card-body p {
//       font-size: 13px;
//       margin: 0 0 40px;
//     }
//     .user {
//       display: flex;
//       margin-top: auto;
//     }

//     .user img {
//       border-radius: 50%;
//       width: 40px;
//       height: 40px;
//       margin-right: 10px;
//     }
//     .user-info h5 {
//       margin: 0;
//     }
//     .user-info small {
//       color: #545d7a;
//     }
//   }
// `;

import { FunctionComponent } from 'react';
import { SocialLinks } from 'components/containers/Social';
import Github from 'styles/Icons/github';
import Twitter from 'styles/Icons/twitter';
import LinkedIn from 'styles/Icons/linkedin';
import Dev from 'styles/Icons/dev';
import styled from 'styled-components';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

interface Props {
  posts: any[];
}

export const getStaticProps: GetStaticProps = async () => {
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

const AllPosts: FunctionComponent<Props> = ({ posts }) => {
  return (
    <>
      <Wrapper>
        <div className='flex__column'>
          <HomeContainer src='./blog.jpg' />
        </div>
        <div className='text'>
          <div className='justify__between container'>
            <div className='flex'>
              <SocialLinks
                link='https://github.com/albertdugba'
                component={<Github width={20} height={20} color='#fff' />}
              />
              <SocialLinks
                className='ml-1'
                link='https://github.com/albertdugba'
                component={<LinkedIn size={20} color='#fff' />}
              />

              <SocialLinks
                className='ml-1'
                link='https://twitter.com/Albert_Dugba'
                component={<Twitter width={20} height={20} color='#fff' />}
              />

              <SocialLinks
                className='ml-1'
                link='https://dev.to/albertdugba'
                component={<Dev size={20} color='#EBE6F3' />}
              />
            </div>
            <ul className='justify__between'>
              <NavLink href='/works'>
                <li className='mr-1'>Works</li>
              </NavLink>
              <NavLink href='/posts'>
                <li className='mr-1'>Blog</li>
              </NavLink>
              <NavLink href='/'>
                <img
                  src='https://scontent.facc6-1.fna.fbcdn.net/v/t1.6435-0/p526x296/199548180_4843198325707173_1589442917293810159_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGOemwec3Sm0Ilhp_BE4-jSkBJ2qBLkopmQEnaoEuSimbwybb5za71pusO-YCw3CjkN7XuTtpgZsBKaueOuO4eC&_nc_ohc=lf6fKinu5m4AX9S899g&tn=y1hXR3x2ilqp3-Fs&_nc_ht=scontent.facc6-1.fna&tp=6&oh=e5f7ad5db1dc9a9e793d4a321cd21fbe&oe=60DEDB9E'
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid #8921af',
                  }}
                />
              </NavLink>
            </ul>
          </div>

          <CardContainer className='container'>
            {posts?.map(post => (
              <>
                <Card>
                  <img
                    style={{ width: '100%', maxWidth: '150px' }}
                    src={post.coverImage.url}
                  />
                </Card>
              </>
            ))}
          </CardContainer>
        </div>
      </Wrapper>
    </>
  );
};

export default AllPosts;

const HomeContainer = styled.img`
  position: relative;
  padding: 45px 0;
  overflow: hidden;
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  display: flex;
  background: var(--primaryColor);
  filter: contrast(100%);
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .text {
    background: rgba(0, 0, 0, 0.75);
    filter: contrast(100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    color: #fff;
  }

  .grid__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    place-items: center;
    padding-top: 50px;
    justify-content: center;

    @media (max-width: 801px) {
      grid-template-columns: 1fr;
    }
  }
`;

const GridContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--primaryColor);
  overflow: hidden;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  place-items: center;
  padding-top: 50px;
  justify-content: center;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
  }
`;

const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;

  li {
    list-style: none;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 25%;
  height: 50vh;
  background: #fff;
  color: #000;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 9px;
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
  align-items: center;
  justify-content: center;
  height: 70%;
  z-index: 10000;
`;

export { HomeContainer, GridContainer, Wrapper, NavLink, Card, CardContainer };
