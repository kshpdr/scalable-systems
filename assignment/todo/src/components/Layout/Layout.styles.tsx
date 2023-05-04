import { styled } from "solid-styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
`;

export const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Content = styled("main")`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const Brand = styled("div")`
  padding-left: 35px;
`;