import { styled, keyframes } from "solid-styled-components";

export const TodoContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background-color: #f8f9fa;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const Buttons = styled("div")`
    padding-left: 10px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
`;

export const deletion = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`
