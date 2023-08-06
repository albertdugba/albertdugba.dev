import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { MDXRemote } from "next-mdx-remote";

import { Layout } from "~/components/layout";
import { serialize } from "next-mdx-remote/serialize";

import { apolloClient } from "~/index";
import { SINGLE_POST } from "~/queries/posts";
import { Post } from "~/types/post";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface PostProps {
  post: InferGetServerSidePropsType<typeof getServerSideProps>;
}

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag='div'
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Component = () => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language='javascript' style={vscDarkPlus}>
      {codeString}
    </SyntaxHighlighter>
  );
};

const BlogPage = ({ post }: PostProps) => {
  const { content, coverImage, postDescription, publishedAt, title, tags } =
    post.post;

  // const bgImage = {
  //   background: `linear-gradient(to bottom,rgba(126, 4, 153, 0.5), rgba(51, 27, 51, 0.5)),
  //     url("${
  //       (coverImage.url && coverImage.url !== "") || coverImage.url !== null
  //         ? coverImage.url
  //         : "/blog-banner.jpeg"
  //     }") no-repeat center center/cover`,
  //   width: "100vw",
  //   minHeight: "100vh",
  // };
  return (
    <Layout title=''>
      <div className='w-[90%]'>
        {/* <Image
          src={coverImage.url}
          fill
          alt=''
          className='w-1/2 h-1/2 object-cover rounded-md border'
        /> */}
      </div>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
      {/* <MDXRemote {...content} components={components} /> */}
    </Layout>
  );
};

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext) {
  const { data } = await apolloClient.query<Post>({
    query: SINGLE_POST,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      post: data,
    },
  };
}
export default BlogPage;
