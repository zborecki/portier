import styled from 'styled-components';

export const IconLinkRoot = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme: { components: { footer: { socialmedia: { background } } } } }) => background.borderRadius};
  background: ${({ theme: { components: { footer: { socialmedia: { background } } } } }) => background.default};
  transition: background .25s ease-out;

  &:hover {
    background: ${({ theme: { components: { footer: { socialmedia: { background } } } } }) => background.active};
  }

  .iconLink {
    &__icon {
      polygon, path, circle {
        stroke: ${({ theme: { components: { footer: { socialmedia: { icon } } } } }) => icon.default};
      }
    }
  }
`;
