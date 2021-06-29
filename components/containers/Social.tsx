import Link from 'next/link';
import { FunctionComponent } from 'react';

interface Props {
  link: string;
  component?;
  className?;
}

export const SocialLinks: FunctionComponent<Props> = ({
  link,
  component,
  className,
}) => {
  return (
    <>
      <Link href={link}>
        <a target='_' className={className}>
          {component}
        </a>
      </Link>
    </>
  );
};
