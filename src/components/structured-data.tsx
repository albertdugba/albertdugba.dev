import { Post } from "~/types";

interface StructuredDataProps {
  post: Post;
}

export function StructuredData({ post }: StructuredDataProps) {
  const baseUrl = "https://albertdugba.dev";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? `${baseUrl}${post.image}` : undefined,
    datePublished: new Date(post.date || "").toISOString(),
    dateModified: new Date(post.lastModified || post.date || "").toISOString(),
    author: {
      "@type": "Person",
      name: "Albert Dugba",
      url: baseUrl,
      sameAs: [
        "https://twitter.com/albertdugba___",
        "https://github.com/albertdugba",
        "https://linkedin.com/in/albertdugba",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Albert Dugba",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags?.join(", "),
    articleSection: post.tags?.[0],
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
