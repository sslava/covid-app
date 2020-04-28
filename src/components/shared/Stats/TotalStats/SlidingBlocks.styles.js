import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Growing = styled.View`
  margin-right: 5px;
  flex-grow: ${(p) => p.fraction};
`;

export const Left = styled.View`
  flex-direction: row;
  flex-grow: 1;
  padding-right: 3px;
`;

export const Right = styled.View``;
