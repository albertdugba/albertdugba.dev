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
