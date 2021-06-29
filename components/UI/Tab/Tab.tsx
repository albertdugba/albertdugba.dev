import Link from 'next/link';
import styled from 'styled-components';
interface Props {
  activeTab: string;
  label: string;
  onClick: () => void;
}

export const Tab = ({ activeTab, label, onClick, href, ...rest }) => {
  if (href) {
    return (
      <Link href={href} aria-label={`Open ${label}`} {...rest}>
        <a
          href={href}
          className={`tab-list-item ${
            activeTab === label ? 'tab-list-active' : ''
          }`}
        ></a>
        {label}
      </Link>
    );
  }

  return (
    <TabButton
      className={`tab-list-item ${
        activeTab === label ? 'tab-list-active' : ''
      }`}
      onClick={() => onClick(label)}
      aria-label={`Open ${label}`}
      {...rest}
    >
      {label}
    </TabButton>
  );
};

export default Tab;

/**
 * @styles
 */

const TabButton = styled.div`
  border: none;
  outline: none;
  border: 1px solid #ddd;
  border-radius: calc(var(--borderRadius) + 90px);
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  width: 100%;
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  padding: 0.3rem 0.9rem;
`;
