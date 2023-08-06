import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  linkUrl: string;
  imageUrl?: string;
}

export function Seo({
  title,
  description,
  linkUrl,
  imageUrl = "https://res.cloudinary.com/dsdifoazf/image/upload/v1691345661/image_4_1_vtos7v.png",
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={description} />

      <meta property='og:url' content={linkUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrl} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imageUrl}></meta>
    </Head>
  );
}
