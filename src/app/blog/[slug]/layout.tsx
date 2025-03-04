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

  const previousImages = [post?.image];

  return {
    metadataBase: new URL("https://albertdugba.dev"),
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
    authors: [{ name: "Albert Dugba" }],
    creator: "Albert Dugba",
    twitter: {
      title: post?.title,
      site: "AlbertDugba",
      card: "summary_large_image",
      description: post?.description,
      images: [
        {
          url: post?.image as string,
          alt: post?.description,
          width: 1200,
          height: 630,
        },
      ],
    },
    openGraph: {
      images: [...(previousImages as string[])],
      title: post?.title,
      description: post?.description,
      authors: "Albert Dugba",
      tags: post?.tags,
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
      <div className='p-5 rounded-xl bg-white/10 text-primary'>
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
