import { styled, css } from "styled-components";

export const StyledResult = styled.strong`
  margin-left: 5%;
  background: rgba(33, 33, 33, 0.5);
  ${({ $hideResult }) =>
    $hideResult &&
    css`
      display: none;
    `}
`;
