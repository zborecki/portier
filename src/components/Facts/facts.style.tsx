import styled from 'styled-components';

export const FactsRoot = styled.section`
  background: ${({ theme: { common: { section } } }) => section.background};

  .facts {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__statistics {
      display: flex;
      gap: 32px;
    }

    &__card {
      max-width: 194px;
    }

    &__headline {
      max-width: 646px;
    }
  }
`;
