import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { IProjectProps } from 'src/lib/interface';
import World from '@icons/world';
import Github from '@icons/github';

export const ProjectTechStack: FunctionComponent<IProjectProps> = ({ tech, hrefLink, github }) => {
  return (
    <Wrapper>
      <div>
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
        </div>
        <div className="flex__column">
          <h3>Project Involvement</h3>
          <div style={{ color: 'var(--primaryColor)', fontWeight: 'bold', marginTop: '-8px' }}>Major</div>
        </div>

        <div className="flex__column">
          <h3 className="align__center">
            <World size={20} color="var(--secondaryColor)" /> <h3 className="ml-1">Website</h3>
          </h3>
          <div>
            <a target="_blank" href={hrefLink}>
              {hrefLink}
            </a>
          </div>
        </div>

        {!github ? (
          <div className="flex__column">
            <div className="align__center">
              <Github size={20} color="var(--secondaryColor)" /> <h3 className="ml-1">Github</h3>
            </div>
            <a>{github}</a>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 5px;

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
  }

  .header {
    text-align: right;
  }
`;
