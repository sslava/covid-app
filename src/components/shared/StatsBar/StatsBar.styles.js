import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Bar = styled.View`
  height: ${(p) => p.height}px;
  width: ${(p) => (p.fraction * 100).toFixed(3)}%;
  background-color: ${(p) => p.color};
`;
