import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const SourceText = styled.Text`
  font-family: 'Ubuntu';
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  color: ${(p) => p.theme.secondaryTextColor};
`;
