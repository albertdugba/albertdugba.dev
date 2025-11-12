import NextImage from "next/image";

export function MDXImage({
  src,
  alt,
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  src: string;
  alt: string;
}) {
  let widthFromSrc, heightFromSrc;

  // Handle relative paths (./image.png) by converting them
  // For colocated images, they should be imported or use absolute paths
  const isRelative = src.startsWith("./") || src.startsWith("../");
  const imageSrc = isRelative ? src : src;

  try {
    const url = new URL(src, "https://maxleiter.com");
    const widthParam = url.searchParams.get("w") || url.searchParams.get("width");
    const heightParam =
      url.searchParams.get("h") || url.searchParams.get("height");
    if (widthParam) {
      widthFromSrc = parseInt(widthParam);
    }
    if (heightParam) {
      heightFromSrc = parseInt(heightParam);
    }
  } catch {
    // If URL parsing fails, it's likely a relative path
  }

  const imageProps = {
    src: imageSrc,
    alt,
    // tweak these to your liking
    height: heightFromSrc || 450,
    width: widthFromSrc || 550,
  };

  return <NextImage {...imageProps} unoptimized />;
}
