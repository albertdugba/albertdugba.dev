import { ISocialLinksProps } from '@/lib/interface';
import Link from 'next/link';
import { FunctionComponent } from 'react';


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
