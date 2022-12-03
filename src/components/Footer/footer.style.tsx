import styled from 'styled-components';

export const FooterRoot = styled.footer`
  background: ${({ theme: { components: { footer } } }) => footer.background};

  .footer {
    &__logo {
      margin-bottom: 32px;
    }

    &__information {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__copyrights {
      margin-bottom: 0px;
    }

    &__socialmedia {
      display: flex;
      gap: 24px;
    }

    &__navigation {
      margin-bottom: 48px;
      
      .navigation {
        &__link {
          text-transform: capitalize;
          color: ${({ theme: { components: { footer: { navigation } } } }) => navigation.color};
          font-size: ${({ theme: { font: { text: { caption } } } }) => caption.large.fontSize};
          line-height: ${({ theme: { font: { text: { caption } } } }) => caption.large.lineHeight};
        }

        &__list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          row-gap: 8px;
        }
      }
    }
  }
`;
