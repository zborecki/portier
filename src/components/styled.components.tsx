import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonProps, HeadlineProps, TextProps } from '../types/props';

const typographyMargin = '0px 0px 16px 0px';

export const Button = styled(Link)<ButtonProps>`
  // Common properties
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  transition: background 0.25s ease-out;
  font-weight: ${({ theme: { font: { button: { common } } } }) => common.fontWeight};
  padding: ${({ theme: { components: { button } } }) => button.common.padding};
  border-radius: ${({ theme: { common } }) => `${common.borderRadius}px`};
  color: ${({ theme: { components: { button: { common } } } }) => common.color};

  // Variants
  background: ${({ variant, theme: { components: { button: { primary, secondary } } } }) => (
    ((variant === 'primary' || !variant) && primary.background.default)
    || (variant === 'secondary' && secondary.background.default)
  )};
  font-size: ${({ size, theme: { font: { button: { standard, small } } } }) => (
    ((size === 'standard' || !size) && standard.fontSize)
    || (size === 'small' && small.fontSize)
  )};
  line-height: ${({ size, theme: { font: { button: { standard, small } } } }) => (
    ((size === 'standard' || !size) && standard.lineHeight)
    || (size === 'small' && small.lineHeight)
  )};

  // States
  &:hover {
    background: ${({ variant, theme: { components: { button: { primary, secondary } } } }) => (
    ((variant === 'primary' || !variant) && primary.background.active)
    || (variant === 'secondary' && secondary.background.active)
  )};
  }
`;

export const Headline = styled.h1<HeadlineProps>`
  // Common properties
  margin: ${typographyMargin};
  color: ${({ theme: { components: { headline } } }) => headline.color};
  font-weight: ${({ theme: { components: { headline } } }) => headline.fontWeight};

  // Variants
  font-size: ${({ variant, theme: { font: { headline: { h1, h3 } } } }) => (
    (variant === 'h1' && h1.fontSize)
    || (variant === 'h3' && h3.fontSize)
  )};
  line-height: ${({ variant, theme: { font: { headline: { h1, h3 } } } }) => (
    (variant === 'h1' && h1.lineHeight)
    || (variant === 'h3' && h3.lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { font: { headline: { h1, h3 } } } }) => (
    (variant === 'h1' && h1.letterSpacing)
    || (variant === 'h3' && h3.letterSpacing)
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

export const Text = styled.p<TextProps>`
  // Common properties
  margin: ${typographyMargin};
  font-weight: ${({ bold, theme: { font: { text: { type } } } }) => (
    bold ? type.bolder : type.standard)};
  color: ${({ theme: { font: { text } } }) => text.color};

  &:last-child {
    margin-bottom: 0px;
  }

  // Variants
  font-size: ${({ variant, theme: { font: { text: { body, caption } } } }) => (
    (variant === 'body-large' && body.large.fontSize)
    || (variant === 'caption-large' && caption.large.fontSize)
  )};
  line-height: ${({ variant, theme: { font: { text: { body, caption } } } }) => (
    (variant === 'body-large' && body.large.lineHeight)
    || (variant === 'caption-large' && caption.large.lineHeight)
  )};
  letter-spacing: ${({ variant, theme: { font: { text: { body } } } }) => (
    (variant === 'body-large' && body.large.letterSpacing)
  )};
`;
