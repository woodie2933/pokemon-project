import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", serif;
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
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffdd94;
  }
`;

export default GlobalStyles;
