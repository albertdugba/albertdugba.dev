export interface Post {
  title: string;
  content: string;
  postDescription: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  slug: string;
  id: string;
  coverImage: {
    url: string;
    id: string;
  };
}
