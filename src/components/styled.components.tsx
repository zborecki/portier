import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonProps } from '../types/props';

export const Button = styled(Link)<ButtonProps>`
  // Common properties
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  transition: background 0.25s ease-out;
  font-size: ${({ theme: { font: { button: { secondary } } } }) => secondary.fontSize};
  font-weight: ${({ theme: { font: { button: { secondary } } } }) => secondary.fontWeight};
  line-height: ${({ theme: { font: { button: { secondary } } } }) => secondary.lineHeight};
  border-radius: ${({ theme: { common } }) => `${common.borderRadius}px`};
  color: ${({ theme: { components: { button: { common } } } }) => common.color};

  // Variants
  background: ${({ variant, theme: { components: { button: { secondary } } } }) => (
    (variant === 'secondary' && secondary.background.default)
  )};
  padding: ${({ size, theme: { components: { button: { common } } } }) => (
    (size === 'small' && common.padding)
  )};

  // States
  &:hover {
    background: ${({ variant, theme: { components: { button: { secondary } } } }) => (
    (variant === 'secondary' && secondary.background.active)
  )};
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 90px;
`;
