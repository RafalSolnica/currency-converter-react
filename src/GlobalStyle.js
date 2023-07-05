import { createGlobalStyle } from "styled-components";
import background from "./images/background.png";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: url("${background}");
  }

  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
`;
