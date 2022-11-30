import styled from 'styled-components';

export const HeroRoot = styled.section`
  background-color: ${({ theme: { common: { section } } }) => section.background};
`;
