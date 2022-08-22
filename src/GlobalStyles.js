import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0%;
    padding: 0%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }
`;