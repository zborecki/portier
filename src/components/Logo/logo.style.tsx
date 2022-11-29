import styled from 'styled-components';
import { BaseTypographyType } from '../../types/common';

export const LogoLogotype = styled.span<BaseTypographyType>`
  color: ${({ color }) => color};
  font-size: ${({ theme: { components: { logo: { font } } } }) => font.fontSize};
  font-weight: ${({ theme: { components: { logo: { font } } } }) => font.fontWeight};
`;
