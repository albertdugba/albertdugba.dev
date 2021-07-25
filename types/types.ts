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
  works?: any[];
  posts?: any[];
}

export interface IWorkProps {
  title: string;
  hrefLink: string;
  projectImages: any[];
  projectImage: string;
  slug: string;
  companyInfo: string;
  jobDescription: string;
}
