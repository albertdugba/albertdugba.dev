import { useState } from 'react';
import styled from 'styled-components';
import { Tab } from './Tab';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClickItem = tab => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className='tab'>
        {children.map(child => {
          const { label, href } = child.props;
          console.log(href);
          return (
            <Tab
              activeTab={activeTab}
              label={label}
              href={href}
              onClick={handleClickItem}
            />
          );
        })}
      </div>

      <div>
        {children.map(child => {
          if (child.props.label !== activeTab) return;
          return child.props.children;
        })}
      </div>
    </>
  );
};

Tabs.propTypes = propTypes;

const Wrapper = styled.div``;
