import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IProjectProps } from '@/lib/interface';

export const ProjectInfo: FunctionComponent<IProjectProps> = ({
  jobDescription,
  features,
  challenges,
  companyInfo,
  title,
}) => (
  <Wrapper>
    <h1>{title}</h1>
    <p className="project__overview">{companyInfo}</p>
    <div className="project__contribution">
      <h2>My Contributions</h2>
    </div>
    <div>
      <p>{jobDescription}</p>
      <ul>
        {features?.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>

    {challenges ? (
      <div>
        <h2>Challenges</h2>
        <p>{challenges}</p>
      </div>
    ) : null}
  </Wrapper>
);

const Wrapper = styled.div`
  .project__overview {
    background: #ddecf5c5;
    padding: 1rem;
    border-radius: 5px;
  }

  .project__contribution {
  }
`;
