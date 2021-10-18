import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IProjectProps } from '@/lib/interface';
import * as Icons from '@icons/index';

export const ProjectTechStack: FunctionComponent<IProjectProps> = ({ tech, hrefLink, github, involvement }) => {
  return (
    <Wrapper>
      <div>
        <div className="flex__column">
          <h3>Platform Technologies</h3>
          <div className="flex mr-1" style={{ width: '100%', overflowY: 'auto', marginTop: '-10px' }}>
            {tech?.map((tStack, idx) => (
              <span className="list__style-none tag" key={idx}>
                {tStack}
              </span>
            ))}
          </div>
        </div>
        <div className="flex__column">
          <h3>Project Involvement</h3>
          <div className="tag" style={{ color: '#fff', fontWeight: 'bold', marginTop: '-8px', width: '16%' }}>
            {involvement}
          </div>
        </div>

        <div className="flex__column">
          <div className="align__center">
            <Icons.World size={20} color="var(--secondaryColor)" /> <h3 style={{ marginLeft: '0.4rem' }}>Website</h3>
          </div>
          <div style={{ marginTop: '-10px', paddingBottom: '3rem' }}>
            <a target="_blank" href={hrefLink} style={{ color: 'var(--primaryColor)', textDecoration: 'none' }}>
              {hrefLink}
            </a>
          </div>
        </div>

        {github ? (
          <div className="flex__column pb-1">
            <div className="align__center">
              <Icons.Github size={20} color="var(--secondaryColor)" /> <h3 className="ml-1">Github</h3>
            </div>
            <div style={{ marginTop: '-10px', paddingBottom: '4rem' }}>
              <a target="_blank" href={github}>
                {github}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 5px;

  a {
    display: inline-block;
    color: var(--secondaryColor);
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem !important;
    position: relative;

    &:hover:after {
      left: 0;
      height: 4px;
      width: 100%;
    }

    &:after {
      position: absolute;
      content: '';
      height: 4px;
      width: 50%;
      background: var(--primaryColor);
      opacity: 0.8;
      bottom: 2px;
      left: 0;
      transition: all 0.3s ease-in-out;
    }
  }

  .tag {
    background: var(--secondaryColor);
    border-radius: 5px;
    padding: 0rem 0.29rem;
    color: #fff;
    margin-right: 0.5rem;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%; */
    white-space: nowrap;
  }

  .header {
    text-align: right;
  }
`;
