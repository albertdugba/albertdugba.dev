import * as React from 'react';

export interface IconProps {
  size: number;
  color: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

export interface ISocialLinksProps {
  link: string;
  component?: any;
  className?: string;
  arialLabel: string;
}

export interface ICardProps {
  works?: IProjectProps[];
  posts?: any[];
  image?: string;
}

export interface IProjectProps {
  title?: string;
  hrefLink?: string;
  projectImages?: any[];
  projectImage?: string;
  slug?: string;
  companyInfo?: string;
  jobDescription?: string;
  features?: string[];
  tech?: string[];
  github?: string;
  challenges?: string;
  internalRoute?: boolean;
  tag?: string;
  involvement?: string;
}

export interface IWorkDetailsProps {
  works: IProjectProps[];
}

export interface ILinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  as?: string;
}

// Posts
export interface PostsProps {
  coverImage: any;
  title: string;
  content: any;
  tags: string[];
  date: any;
  slug: string;
  postDescription?: string;
  author: {
    name: string;
    id: string;
    picture: {
      url: string;
    };
  };
}

export interface PostProps {
  post: PostsProps[];
}
