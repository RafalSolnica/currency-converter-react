import { styled } from "styled-components";

export const StyledSelect = styled.select`
  cursor: pointer;
  width: 130px;
  background-color: ${({ theme }) => theme.color.tundora};
  color: ${({ theme }) => theme.color.white};
  text-align: right;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.white};
`;

export const Option = styled.option`
  font-weight: bold;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.emperor};
  }
`;
