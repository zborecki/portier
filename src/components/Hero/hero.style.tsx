import styled from 'styled-components';

export const HeroRoot = styled.section`
  background-color: ${({ theme: { common: { section } } }) => section.background};

  .hero {
    &__card {
      @media screen and (max-width: 992px) {
        max-width: 100%;
      }
    }

    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 34px;

      @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;
