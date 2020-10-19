import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 0;
  margin-vertical: 5px;
  height: ${(p) => p.height}px;
  background-color: ${(p) => p.theme.secondaryBackground};
`;

export const Bar = styled.View`
  height: ${(p) => p.height}px;
  width: ${(p) => (p.fraction * 100).toFixed(3)}%;
  background-color: ${(p) => p.color};
`;
