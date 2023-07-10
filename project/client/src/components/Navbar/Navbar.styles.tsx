import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #282c34;
  color: #ffffff;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-left: 20px;
  cursor: pointer;
`;
