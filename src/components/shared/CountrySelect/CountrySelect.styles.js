import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(p) => p.theme.primaryBackground};
`;

export const Search = styled.View`
  padding-horizontal: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
`;
