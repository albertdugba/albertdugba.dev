function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (children && typeof children === "object" && "props" in children) {
    return getTextContent((children as any).props.children);
  }
  return "";
}

function createHeading(level: 2 | 3) {
  const Tag = `h${level}` as const;

  return function MDXHeading({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    const text = getTextContent(children);
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return (
      <Tag id={id} {...props}>
        <a href={`#${id}`} className="header-link">
          {text}
        </a>
      </Tag>
    );
  };
}

export const MDXHeading2 = createHeading(2);
export const MDXHeading3 = createHeading(3);
