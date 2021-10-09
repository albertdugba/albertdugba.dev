import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { PostsProps } from '@/lib/interface';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ArrowLeft from '@icons/arrow-left';
import { useRouter } from 'next/router';

// duotoneSpace

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={duotoneDark}
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

const PostDetails: FunctionComponent<PostsProps> = ({ coverImage, title, content, author, date, tags }) => {
  return (
    <>
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
                  <span className="post__author--name">{author?.name}</span>

                  <a target="_blank" href="https://twitter.com/Albert_Dugba">
                    <span className="follow__link" style={{ marginLeft: '0.4rem' }}>
                      Follow
                    </span>
                  </a>
                </div>
                <span>{date}</span>
              </div>
            </div>
            <img className="post__coverImage" src={coverImage.url} alt="Blog" />
          </div>
        </div>

        <div className="post__content">
          <ReactMarkdown children={content} components={components} />
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              #{tag}
            </span>
          ))}
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

      .follow__link {
        padding: 0.2rem 0.45rem;
        border-radius: 20px;
        height: 20px;
        width: 100%;
        background: var(--secondaryColor);
        color: #fff;
        cursor: pointer;
      }
    }

    &--name {
      font-size: 0.9rem;
      font-weight: 500;
      letter-spacing: 0px;
    }
  }

  .post__coverImage {
    max-width: 100%;
    height: auto;
  }

  .post__image {
    max-width: 100%;
    margin: auto;

    .post__title {
      line-height: 1.5;
      font-size: 1.7rem;
      font-weight: 700;

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
    padding-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      line-height: 1.4;
    }

    .tag {
      background: var(--primaryColor);
      color: #fff;
      border-radius: 7px;
      padding: 0.3rem 0.4rem;
      margin-right: 1rem;
      font-size: 0.85rem;
    }

    a {
      display: inline-block;
      color: var(--secondaryColor);
      text-decoration: none;
      font-weight: bolder;
      /* font-size: 1.125rem !important; */
      position: relative;

      &:hover:after {
        left: 0;
        height: 7px;
        width: 100%;
      }

      &:after {
        position: absolute;
        content: '';
        height: 7px;
        width: 50%;
        background: var(--primaryColor);
        opacity: 0.8;
        bottom: 2px;
        left: 0;
        transition: all 0.3s ease-in-out;
      }
    }

    p code {
      font-weight: bold;
      font-size: 1rem;
    }

    p img {
      max-width: 100%;
      height: auto;
      box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
    }

    div {
      border-radius: 8px;
    }

    @media (min-width: 801px) {
      max-width: 70%;

      h1 {
        font-size: 1.2rem;
        line-height: 1.2;
      }
    }
  }
`;
