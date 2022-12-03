import styled from 'styled-components';

export const Error404Root = styled.section`
  background-color: ${({ theme: { common: { section } } }) => section.background};

  .error404 {
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__button {
      width: fit-content;
    }

    &__h1 {
      font-size: 100px;
      margin-bottom: 32px;
      color: ${({ theme: { components: { error: { h1 } } } }) => h1.color};
    }
  }
`;
