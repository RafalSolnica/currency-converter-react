import { styled, css } from "styled-components";

export const Wrapper = styled.p`
  margin: 20px 5%;
  font-weight: bold;
  background: ${({ theme }) => theme.color.transparentGrey};
  ${({ $hideResult }) =>
    $hideResult &&
    css`
      display: none;
    `};
`;
