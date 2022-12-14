import styled from 'styled-components';

export const HeaderRoot = styled.header`
  padding: 18px 0px;
  background-color: ${({ theme: { components: { header } } }) => header.background};

  .header {
    &__navigation {
      @media screen and (max-width: 992px) {
        display: none;
      }
      
      .navigation {
        &__link {
          transition: color 0.2s ease-out;
          text-transform: capitalize;
          color: ${({ theme: { components: { header: { navigation } } } }) => navigation.default};
          font-size: ${({ theme: { font: { button: { small } } } }) => small.fontSize};
          font-weight: ${({ theme: { font: { button: { common } } } }) => common.fontWeight};
          line-height: ${({ theme: { font: { button: { small } } } }) => small.lineHeight};

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
  }
`;
