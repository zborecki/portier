import styled from 'styled-components';

const transitionDuration = '.25s';

export const CardRoot = styled.div`
  max-width: 400px;
  padding: 20px;
  transition: background ${transitionDuration} ease-out;
  border-radius: ${({ theme: { common } }) => `${common.borderRadius}px`};
  background: ${({ theme: { components: { card } } }) => card.wrapper.default};

  &:hover {
    background: ${({ theme: { components: { card } } }) => card.wrapper.active};

    .card {
      &__description {
        color: ${({ theme: { components: { card: { description } } } }) => description.active};
      }

      &__icon {
        > rect, line, path, polyline {
          stroke: ${({ theme: { components: { card: { shape: { icon } } } } }) => icon.active};
        }
      }

      &__shape {
        background: ${({ theme: { components: { card: { shape } } } }) => shape.background.active};;
      }
    }
  }

  .card {
    &__headline {
      color: ${({ theme: { components: { card: { headline } } } }) => headline.color};
    }

    &__description {
      color: ${({ theme: { components: { card: { description } } } }) => description.default};
      transition: color ${transitionDuration} ease-out;
    }

    &__icon {
      > rect {
        &:first-of-type {
          stroke: transparent;
        }
      }

      > rect, line, path, polyline {
        stroke: ${({ theme: { components: { card: { shape: { icon } } } } }) => icon.default};
        transition: background ${transitionDuration} ease-out;
      }
    }

    &__shape {
      border-radius: ${({ theme: { common } }) => `${common.borderRadius}px`};
      background: ${({ theme: { components: { card: { shape } } } }) => shape.background.default};
      transition: background ${transitionDuration} ease-out;
    }
  }
`;
