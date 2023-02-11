import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
  query Posts {
    posts {
      id
      title
      slug
      content
      coverImage {
        id
        url
      }
    }
  }
`;

export const SINGLE_POST = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content
      coverImage {
        id
        url
      }
    }
  }
`;
