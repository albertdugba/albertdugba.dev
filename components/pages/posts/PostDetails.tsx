import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PostsProps } from '@/lib/interface';
import ArrowLeft from '@icons/arrow-left';
// duotoneSpace

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

const PostDetails: FunctionComponent<PostsProps> = ({
  coverImage,
  title,
  content,
  postDescription,
  author,
  date,
  tags,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={title} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="albertdugba.dev" />
        <meta property="og:description" content={postDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={coverImage.url} />
        <meta name="twitter:card" content={coverImage.url} />
        <meta name="twitter:site" content="@Albert_Dugba" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta name="twitter:image" content={coverImage.url} />
      </Head>
      <Wrapper>
        <div className="container">
          <div className="post__image">
            <Link href="/posts">
              <button className="mt-1 align__center">
                <ArrowLeft size={25} color="#fff" /> <span className="ml-1">Back to posts</span>
              </button>
            </Link>
            <h1 className="post__title">{title}</h1>
            <div className="post__author">
              <img src={author.picture?.url} alt={author?.name} />
              <div className="flex__column post__author--meta">
                <div>
                  <span>{author?.name}</span>

                  <a target="_blank" href="https://twitter.com/Albert_Dugba">
                    <span className="follow__button" style={{ marginLeft: '0.4rem' }}>
                      Follow
                    </span>
                  </a>
                </div>
                <span>{date}</span>
              </div>
            </div>
            <img src={coverImage.url} alt="Blog" />
          </div>
        </div>

        <div className="post__content">
          <ReactMarkdown children={content} components={components} />
        </div>
      </Wrapper>
    </>
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

  .post__author {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    img {
      height: 45px;
      width: 45px;
      object-fit: contain;
      border-radius: 50%;
    }
    &--meta {
      font-size: 0.85rem;
      margin-left: 0.6rem;
      font-weight: 400;

      a {
        text-decoration: none;
      }

      .follow__button {
        padding: 0.2rem 0.45rem;
        border-radius: 20px;
        height: 20px;
        width: 100%;
        background: var(--secondaryColor);
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .post__image {
    max-width: 100%;
    margin: auto;

    .post__title {
      line-height: 1.5;
      font-size: 1.7rem;

      @media (min-width: 801px) {
        font-size: 2.5rem;
      }
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
