import { styled } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
  margin: 10px 0 30px;
`;

export const Button = styled.button`
  background-color: #333;
  color: ${({ theme }) => theme.color.silver};
  box-shadow: inset 1px 1px 10px ${({ theme }) => theme.color.silver};
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  min-width: 130px;
  margin: 10px 10px;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  font-size: 20px;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.doveGrey};
    color: ${({ theme }) => theme.color.white};
    box-shadow: inset 1px 1px 10px ${({ theme }) => theme.color.white};
  }

  &:focus {
    border: none;
    outline: 1px solid ${({ theme }) => theme.color.white};
  }
`;
