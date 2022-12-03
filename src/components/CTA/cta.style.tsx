import styled from 'styled-components';

export const CTARoot = styled.section`
  background: ${({ theme: { common: { section } } }) => section.background};

  .cta {
    &__interaction {
      max-width: 530px;
    }

    &__headline {
      max-width: 508px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;

      @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
      }
    }
  }
`;
