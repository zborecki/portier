import styled from 'styled-components';

export const HeaderRoot = styled.header`
  background-color: darkcyan;

  .header {
    &__navigation {
      .navigation {
        &__link {
          color: ${({ theme: { components: { header: { navigation } } } }) => navigation.default};
          font-size: ${({ theme: { font: { button: { secondary } } } }) => secondary.fontSize};
          font-weight: ${({ theme: { font: { button: { secondary } } } }) => secondary.fontWeight};
          line-height: ${({ theme: { font: { button: { secondary } } } }) => secondary.lineHeight};

          &.active {
            color: ${({ theme: { components: { header: { navigation } } } }) => navigation.active};
          }
        }

        &__list {
          display: flex;
          gap: 40px;
        }
      }
    }

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
