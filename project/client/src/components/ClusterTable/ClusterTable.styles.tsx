import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const DeleteButton = styled.button`
  color: white;
  background-color: #ff3860;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ff2b56;
  }

  &:focus {
    outline: none;
  }
`;