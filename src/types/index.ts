export type Base = {
  title: string;
  description: string;
  href?: string;
};

export type Post = Base & {
  slug: string | undefined;
  date: string;
  tags: string[];
  body: string;
  lastModified: number;
  image: string;
  isPublished: boolean;
};
