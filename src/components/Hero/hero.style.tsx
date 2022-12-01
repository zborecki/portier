import styled from 'styled-components';

export const HeroRoot = styled.section`
  background-color: ${({ theme: { common: { section } } }) => section.background};

  .hero {
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 34px;
    }
  }
`;
