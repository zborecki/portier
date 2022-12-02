import styled from 'styled-components';

export const ScrollRoot = styled.section`
  background: ${({ theme: { common: { section } } }) => section.background};
`;
