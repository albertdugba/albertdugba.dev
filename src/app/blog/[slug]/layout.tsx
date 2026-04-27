import { Metadata } from "next";
import Navigation from "~/components/content-footer";
import { getAllPosts } from "~/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post?.slug }));
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getAllPosts()).find((p) => p?.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The requested blog post could not be found",
    };
  }

  const baseUrl = "https://albertdugba.dev";
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const ogImageUrl = `${postUrl}/opengraph-image`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${post.title} | Albert Dugba`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Albert Dugba", url: baseUrl }],
    creator: "Albert Dugba",
    publisher: "Albert Dugba",
    alternates: {
      canonical: postUrl,
      types: {
        "application/rss+xml": `${baseUrl}/rss.xml`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      site: "@albertDugba___",
      creator: "@albertDugba___",
      images: [ogImageUrl],
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.title,
      description: post.description,
      siteName: "Albert Dugba",
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: ["Albert Dugba"],
      publishedTime: new Date(post.date || "").toISOString(),
      modifiedTime: new Date(
        post.lastModified || post.date || ""
      ).toISOString(),
      tags: post.tags,
    },
  };
};

async function getData({ slug }: { slug: string }) {
  const posts = await getAllPosts();
  const postIndex = posts.findIndex((p) => p?.slug === slug);

  if (postIndex === -1) {
    throw new Error(`${slug} not found in posts.`);
  }

  const post = posts[postIndex];

  const { ...rest } = post;

  return {
    previous: posts[postIndex + 1] || undefined,
    next: posts[postIndex - 1] || undefined,
    ...rest,
  };
}

export default async function PostLayout({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) {
  const { previous, next, slug } = await getData(params);

  return (
    <>
      <article className='Post-Content'>{children}</article>

      <div className='w-full my-16 border-l-4 border-secondary bg-lightest-gray rounded-r-lg p-6'>
        <p className='leading-relaxed'>
          Find an issue with this post? Think you could clarify, update or add something?
        </p>
        <p className='mt-2 leading-relaxed'>
          All my posts are available to edit on GitHub. Any fix, little or small, is appreciated!
        </p>
        <a
          className='inline-flex items-center gap-2 mt-4 font-semibold underline hover:text-secondary transition-colors'
          href={`https://github.com/albertdugba/albertdugba.dev/blob/main/src/posts/${slug}/index.mdx`}
        >
          <svg className='w-4 h-4' viewBox='0 0 16 16' fill='currentColor'>
            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
          </svg>
          Edit on GitHub
        </a>
      </div>

      <Navigation previous={previous} next={next} />
    </>
  );
}
