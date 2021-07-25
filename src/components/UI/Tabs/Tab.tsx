import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { FunctionComponent } from 'react';

interface ITabProps {
  activeTab: string;
  label?: string;
  onClick: (e: any) => void;
  href?: string;
}

export const Tab: FunctionComponent<ITabProps> = ({
  activeTab,
  label,
  onClick,
  href,
  ...rest
}) => {
  if (href) {
    return (
      <a
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        {...rest}
      >
        {label}
      </a>
    );
  }

  return (
    <Wrapper>
      <button
        className={`tab-list-item ${
          activeTab === label ? 'tab-list-active' : ''
        }`}
        type='button'
        onClick={() => onClick(label)}
        aria-label={`Open ${label}`}
        {...rest}
      >
        {label}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: block;
    outline: none;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    position: relative;

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      height: 10px;
      width: 9px;
      background: red;
    }
  }
`;
