import styled from 'styled-components';
import { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Tag } from 'src/components/common/tag/Tag';

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

const PostDetails: FunctionComponent<PostProps> = ({ coverImage, title, content, author, date, tags }) => {
  return (
    <Wrapper>
      <div>
        <div className="container">
          <div className="post__info">
            <h1>{title}</h1>
          </div>
          <div className="post__image">
            <img src={coverImage.url} alt="Blog" />
          </div>
        </div>
        <div className="post__card">
          <div className="container">
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
    width: 60%;
    margin: auto;

    @media (max-width: 758px) {
      width: 90%;
    }
  }

  .post__info {
    line-height: 1.2;
    .post__title h1 {
      /* display: flex; */
      align-items: center;
      /* flex-direction: column; */
      height: 100%;
      font-size: 1.5rem;
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
