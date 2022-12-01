import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Sora', sans-serif;
  }

  section {
    padding: 120px 0px;
  }
`;
