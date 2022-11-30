import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonProps, HeadlineProps } from '../types/props';

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

export const Headline = styled.h1<HeadlineProps>`
  // Common properties
  color: ${({ theme: { components: { headline } } }) => headline.color};
  font-weight: ${({ theme: { components: { headline } } }) => headline.fontWeight};

  // Variants
  font-size: ${({ variant, theme: { font: { headline: { h1 } } } }) => (
    (variant === 'h1' && h1.fontSize)
  )};
  line-height: ${({ variant, theme: { font: { headline: { h1 } } } }) => (
    (variant === 'h1' && h1.lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { font: { headline: { h1 } } } }) => (
    (variant === 'h1' && h1.letterSpacing)
  )};

  &::after {
    content: '.';
    display: ${({ dot }) => (dot ? 'inline' : 'none')};
    color: ${({ theme: { components: { headline: { dot } } } }) => dot.color};
  }
`;

export const HighlightText = styled.span`
  color: ${({ theme: { components: { highlightText } } }) => highlightText.color};
`;
