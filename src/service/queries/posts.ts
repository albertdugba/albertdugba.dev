import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
  query Post {
    posts {
      id
      title
      coverImage {
        id
        url
      }
    }
  }
`;
