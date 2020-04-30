import styled from 'styled-components/native';

export const Container = styled.View`
  padding-left: 20px;
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
`;
