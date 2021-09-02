import styled from 'styled-components';
import { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface PostProps {
  coverImage: any;
  title: string;
  content: any;
  tags: string[];
  date: any;
  author: {
    name: string;
    id: string;
  };
}

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={materialOceanic}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const PostDetails: FunctionComponent<PostProps> = ({ coverImage, title, content, author, date }) => {
  return (
    <Wrapper>
      <div className="post__image" style={{ backgroundImage: `url(${coverImage.url})` }}></div>
      <div>
        <div className="post__info">
          <div className="container post__title">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="post__card">
          <div className="container">
            <h2 className="b-line pb-1">
              Written by {author.name} on {date}
            </h2>
            <div className="post__content">
              <ReactMarkdown children={content} components={components} />
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

  .post__image {
    width: 100%;
    height: 320px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .post__info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 320px;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;

    .post__title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      font-size: 2rem;
      line-height: 1.3;

      @media (max-width: 801px) {
        font-size: 1rem;
      }
    }
  }

  .post__card {
    /* background: #a19ca5; */
    /* color: #fff; */
    padding: 1rem;
    min-height: 100vh;
  }

  .post__content {
  }
`;
