import { styled } from "styled-components";

export const StyledSelect = styled.select`
  cursor: pointer;
  width: 130px;
  background-color: #444;
  color: #fff;
  text-align: right;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #fff;
`;

export const Option = styled.option`
  font-weight: bold;

  &:nth-child(even) {
    background-color: #555;
  }
`;
