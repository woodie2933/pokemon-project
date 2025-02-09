import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// reset css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: inherit;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    width: 100%;
    height: 100vh;
    background: #ffdd94;
  }
`;

export default GlobalStyle;
