import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border: 3px solid;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
  }
`;

export const Text = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;
