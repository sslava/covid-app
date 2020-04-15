import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 20px;
  padding-horizontal: 20px;
`;

export const Btn = styled.TouchableOpacity`
  border-radius: 5px;
  height: 44px;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.secondaryBackground};
`;

export const Caption = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${(p) => p.theme.primaryTextColor};
`;
