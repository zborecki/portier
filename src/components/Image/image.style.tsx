import styled from 'styled-components';

export const ImageRoot = styled.div<{
  width: number;
}>`
  max-width: ${({ width }) => `${width}px`};

  .image {
    &__picture {
      width: 100%;
    }
  }
`;
