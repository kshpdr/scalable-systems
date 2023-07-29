import React from 'react';
import { Header, Title, NavList, NavItem } from './Navbar.styles';
import { useHistory } from "react-router-dom";


const Navbar: React.FC = () => {
  const history = useHistory();

  function navHome() {
    history.push('/');
  }

  function navDCs() {
    history.push('/Datacenters');
  }

  function navJobs() {
    history.push('/Jobs');
  }

  function navAuthors() {
    history.push('/authors');
  }

  return (  
    <Header>
      <Title onClick={navHome}>My CO2 App</Title>
      <NavList>
        <NavItem onClick={navHome}>Home</NavItem>
        <NavItem onClick={navDCs}>Datacenters</NavItem>
        <NavItem onClick={navJobs}>Jobs</NavItem>
        <NavItem onClick={navAuthors}>Authors</NavItem>
      </NavList>
    </Header>
  );
}

export default Navbar;
