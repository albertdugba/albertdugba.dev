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
      site: "@AlbertDugba",
      creator: "@AlbertDugba",
      images: [ogImageUrl],
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.title,
      description: post.description,
      siteName: "Albert Dugba's Blog",
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
      modifiedTime: new Date(post.lastModified || post.date || "").toISOString(),
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
      <div className='p-5 rounded-lg bg-gray-100 text-secondary mb-2'>
        <p>
          See something that looks a little off? Feel free to{" "}
          <a
            className='font-semibold'
            href={`https://github.com/albertdugba/albertdugba.dev/blob/main/src/posts/${slug}.mdx`}
          >
            open a pull request here.
          </a>
        </p>
      </div>
      <Navigation previous={previous} next={next} />
    </>
  );
}
