import styled from 'styled-components';

export const InformationRoot = styled.section<{
  reverse?: boolean;
}>`
  background: ${({ theme: { common: { section } } }) => section.background};

  .information {
    &__image {
      .image {
        &__picture {
          border-radius: ${({ theme: { common } }) => `${common.borderRadius}px`};
        }
      }
    }

    &__interaction {
      max-width: 530px;
    }

    &__wrapper {
      flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

      @media screen and (max-width: 960px) {
        flex-direction: column;
        flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
      }
    }
  }
`;
