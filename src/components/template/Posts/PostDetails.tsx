import styled from 'styled-components';
import { FunctionComponent } from 'react';

interface PostProps {
  coverImage: any;
  title: string;
  content: any;
  md: any;
  author: {
    name: string;
    id: string;
  };
}

const PostDetails: FunctionComponent<PostProps> = ({ coverImage, title, content, author }) => {
  return (
    <Wrapper>
      <div className="post__image">
        <img src={coverImage.url} alt={title} />
      </div>
      <div>
        <div className="post__info">
          <div className="container post__inner">
            <div className="post__title">
              <div>
                <h1>{title}</h1>
                <span>{author.name}</span>
              </div>
            </div>
            <div className="post__card">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PostDetails;

/**
 * @styles
 */

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  .post__inner {
    margin-top: 3rem;
  }

  .post__image {
    position: relative;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .post__info {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    overflow-y: scroll;
  }

  .post__title {
    font-size: 2.5rem;
    color: #fff;
    line-height: 1.2;

    @media (max-width: 901px) {
      font-size: 1.3rem;
    }
  }

  .post__card {
    background: #fff;
    padding: 1.2rem;
    border-radius: 12px;
    min-height: 300px;
  }
`;
