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
      gap: 176px;
    }
  }
`;
