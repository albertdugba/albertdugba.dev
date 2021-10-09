import { ISocialLinksProps } from '@/lib/interface';
import Link from 'next/link';
import { FunctionComponent } from 'react';

export const SocialLinks: FunctionComponent<ISocialLinksProps> = ({ link, component, className, arialLabel }) => {
  return (
    <>
      <Link href={link}>
        <a aria-label={arialLabel} rel="noopener" target="_" className={className}>
          {component}
        </a>
      </Link>
    </>
  );
};
