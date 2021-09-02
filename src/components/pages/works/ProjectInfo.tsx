import { FunctionComponent } from 'react';
import { IProjectProps } from 'src/lib/interface';

export const ProjectInfo: FunctionComponent<IProjectProps> = ({
  jobDescription,
  features,
  challenges,
  companyInfo,
}) => {
  return (
    <div className="work__info">
      <p style={{ background: '#ece8f0c6', padding: '1rem', borderRadius: '5px' }}>{companyInfo}</p>

      <div className="wordDetails">
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

      <h2>Challenges</h2>
      <p>{challenges}</p>
    </div>
  );
};
