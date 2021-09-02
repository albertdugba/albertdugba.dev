import { FunctionComponent } from 'react';
import Link from 'next/link';
import { IProjectProps } from 'src/lib/interface';

export const ProjectTechStack: FunctionComponent<IProjectProps> = ({ title, tech, hrefLink, github }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1>{title}</h1>
      <div>
        <div>
          <div>
            <p style={{ textAlign: 'right' }}>Tech Stack</p>
            <ul className="lex">
              {tech?.map((tStack, idx) => (
                <li key={idx}>{tStack}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>Project Involvement</div>
        <div>Major</div>
        <div>
          <div>
            {hrefLink ? (
              <Link href={hrefLink}>
                <a target="_blank">Visit site</a>
              </Link>
            ) : null}
          </div>
          <div>
            {github ? (
              <Link href={github}>
                <a>Github</a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
