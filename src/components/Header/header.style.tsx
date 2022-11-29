import styled from 'styled-components';

export const HeaderRoot = styled.header`
  padding: 18px 0px;
  background-color: ${({ theme: { components: { header } } }) => header.background};

  .header {
    &__interaction {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    &__navigation {
      .navigation {
        &__link {
          transition: color 0.2s ease-out;
          text-transform: capitalize;
          color: ${({ theme: { components: { header: { navigation } } } }) => navigation.default};
          font-size: ${({ theme: { font: { button: { secondary } } } }) => secondary.fontSize};
          font-weight: ${({ theme: { font: { button: { secondary } } } }) => secondary.fontWeight};
          line-height: ${({ theme: { font: { button: { secondary } } } }) => secondary.lineHeight};

          &.active, &:hover {
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
