import { useState, createContext } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabContent = createContext('');

export const Tabs = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleClickItem = tab => {
    setActiveTab(tab);
  };

  return (
    <TabContent.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContent.Provider>
  );
};
