import styled from 'styled-components';

export const TestimonialCardRoot = styled.div`
  display: flex;
  gap: 24px;
  max-width: 438px;
  border-radius: ${({ theme: { common } }) => `${common.borderRadius}px`};
  margin-bottom: 40px;
  padding: 20px;
  background: ${({ theme: { components: { testimonialCard: { background } } } }) => background.default};
  transition: background .25s ease-out;

  &:hover {
    background: ${({ theme: { components: { testimonialCard: { background } } } }) => background.active};
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  .card {
    &__avatar > img {
      border-radius: 50%;
    }

    &__fullName {
      color: ${({ theme: { components: { testimonialCard: { fullName } } } }) => fullName};
      margin-bottom: 4px;
    }

    &__occupation {
      color: ${({ theme: { components: { testimonialCard: { occupation } } } }) => occupation};
    }

    &__message {
      margin-bottom: 24px;
    }
  }
`;
