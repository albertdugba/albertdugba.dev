import Link from "next/link";

import { Post } from "~/types";

const Navigation = ({ previous, next }: { previous?: Post; next?: Post }) => {
  return (
    <nav className='w-full  flex'>
      <div className=''>
        {previous && (
          <Link href={`./${previous.slug}`}>
            <div>← Older</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className=''>
        {next && (
          <Link className='flex flex-col underline font-semibold text-secondary' href={`./${next.slug}`}>
            <span>Newer →</span>
            {next.title}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
