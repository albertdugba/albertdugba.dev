import Link from 'next/link';
import { FunctionComponent } from 'react';
import { ISocialLinksProps } from 'types/types';

export const SocialLinks: FunctionComponent<ISocialLinksProps> = ({ link, component, className }) => {
  return (
    <>
      <Link href={link}>
        <a target="_" className={className}>
          {component}
        </a>
      </Link>
    </>
  );
};
