import { FunctionComponent, useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import styled from 'styled-components';

import Navigation from './Menu/MenuItems';
import MenuToggle from './Menu/MenuToggle';
import SideBar from './Menu/SIdeBar';

const Header: FunctionComponent = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavBar>
      <div>
        <Nav className="container">
          <SideBar isOpen={isOpen} toggleOpen={toggleOpen} />
          <h1>@lbert.</h1>
          <div className="icon">
            <MenuToggle toggle={() => toggleOpen()} />
          </div>
          <Navigation />
        </Nav>
      </div>
    </NavBar>
  );
};

// styles
const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const Nav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
