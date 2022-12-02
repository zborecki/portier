import styled from 'styled-components';

export const InformationRoot = styled.section`
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
  }
`;
