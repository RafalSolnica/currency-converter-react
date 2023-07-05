import { styled, css } from "styled-components";

export const StyledResult = styled.strong`
  margin-left: 5%;
  background: ${({ theme }) => theme.color.transparentGrey};
  ${({ $hideResult }) =>
    $hideResult &&
    css`
      display: none;
    `};
`;
