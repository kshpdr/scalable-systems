import React from 'react';
import { Header, Title, NavList, NavItem } from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <Header>
      <Title>My CO2 App</Title>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </Header>
  );
}

export default Navbar;
