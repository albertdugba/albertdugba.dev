import Link from 'next/link';

export const SocialLinks = ({ link, component }) => {
  return (
    <>
      <Link href={link}>
        <a target="_">{component}</a>
      </Link>
    </>
  );
};
