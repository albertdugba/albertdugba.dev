import { FunctionComponent } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
        style={materialDark}
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
      <div className="container">
        <div className="post__image">
          <h1>{title}</h1>
          <img src={coverImage.url} alt="Blog" />
        </div>
      </div>

      <div className="post__content">
        <ReactMarkdown children={content} components={components} />
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
  overflow: hidden;

  .post__image {
    max-width: 100%;
    margin: auto;

    h1 {
      line-height: 1.5;
    }

    @media (min-width: 758px) {
      width: 75%;
    }
  }

  .post__content {
    padding: 1rem;
    width: 100%;
    margin: auto;

    a {
      color: var(--primaryColor);
      text-decoration: none;
      font-weight: 800;
    }

    p code {
      font-weight: bold;
      font-size: 1rem;
    }

    div {
      border-radius: 8px;
    }

    @media (min-width: 801px) {
      max-width: 70%;
    }
  }
`;
