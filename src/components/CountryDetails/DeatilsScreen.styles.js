import styled from 'styled-components/native';

export const Safe = styled.SafeAreaView`
  flex: 1;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const Scroll = styled.ScrollView`
  margin-top: 10px;
  background-color: ${(p) => p.theme.secondaryBackground};
`;
