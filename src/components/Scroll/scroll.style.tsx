import styled from 'styled-components';

export const ScrollRoot = styled.section`
  background: ${({ theme: { common: { section } } }) => section.background};

  .scroll {
    &__information {
      max-width: 646px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      gap: 32px;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }
  }
`;
