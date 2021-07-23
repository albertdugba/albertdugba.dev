import { useState, FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { Tab } from './Tab';

interface ITabProp {
  children: ReactNode | null | any;
}

type ChildProps = {
  child?: any;
};

export const Tabs: FunctionComponent<ITabProp> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClickItem = (tab: any) => {
    setActiveTab(tab);
  };
  return (
    <>
      {/* <div className='tab'>
        {children?.map((child: ChildProps) => {
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
        {children?.map(child => {
          if (child.props.label !== activeTab) return;
          return child.props.children;
        })}
      </div> */}
    </>
  );
};

const Wrapper = styled.div``;
