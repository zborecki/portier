import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Sora', sans-serif;
  }

  section, footer {
    padding: 120px 0px;
  }
`;
