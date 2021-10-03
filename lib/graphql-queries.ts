export const allWorksQuery = `
query Works() {
  works {
    title
    linkContent
    projectImage
    projectImages
    hrefLink
    features
    slug
    tag
    internalRoute
  }
}

`;

export const singleWorkQuery = `
query WorkDetailsQuery($slug: String!) {
  works(where: {slug: $slug}) {
    title
    projectImage
    projectImages
    linkContent
    hrefLink
    jobDescription
    involvement
    slug
    companyInfo
    features
    challenges
    tag
    tech
    github
  }
}
`;

export const allPostsQuery = `
{
  posts {
    id
    title
    content
    slug
    tags
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
`;

export const singlePostQuery = `
query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content
      slug
      tags
      date
      coverImage {
        id
        url
      }
      author {
        name
        picture{
          url
        }
      }
    
    }
  }

`;
