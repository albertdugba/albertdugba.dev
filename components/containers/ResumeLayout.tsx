import styled from 'styled-components';
import { FunctionComponent } from 'react';

interface ResumeProps {
  company: string;
  jobTitle: string;
  date: string;
  jobDescription: string;
}

export const ResumeLayout: FunctionComponent<ResumeProps> = ({
  company,
  jobTitle,
  date,
  jobDescription,
}) => (
  <div className="experience">
    <div>
      <h2>{company}</h2>
    </div>

    <div className="justify__between">
      <span>{jobTitle}</span>
      <span>{date}</span>
    </div>
    <div>
      <p>{jobDescription}</p>
    </div>
  </div>
);
