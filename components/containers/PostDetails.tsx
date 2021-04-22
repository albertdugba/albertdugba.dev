type PostProps = {
  id: string;
  title: string;
  body: string;
  tags: string;
};

const PostDetails = ({ id, title, body, tags }: PostProps) => {
  return (
    <div className="container">
      <h1>Blog Post Details:{title}</h1>
      <section>Body:{body}</section>
      <div>Tags:{tags}</div>
    </div>
  );
};

export default PostDetails;
