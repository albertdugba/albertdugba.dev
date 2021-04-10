import React, { createContext, useContext, useReducer } from 'react';

export interface Posts {
  id: string;
  title: string;
  body: string;
  tags: string;
}

interface PostContextValues {
  posts: Posts[];
}

export const postsContextDefaultValue: PostContextValues = {
  posts: [],
};

export const PostContext = createContext<PostContextValues>(
  postsContextDefaultValue
);
