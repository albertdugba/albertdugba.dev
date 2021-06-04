import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  link: string;
  component?;
}

export const SocialLinks: FunctionComponent<Props> = ({ link, component }) => {
  return (
    <>
      <Link href={link}>
        <a target="_">{component}</a>
      </Link>
    </>
  );
};
