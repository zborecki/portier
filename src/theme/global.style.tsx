import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Sora', sans-serif;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
