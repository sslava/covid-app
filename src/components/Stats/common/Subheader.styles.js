import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const Header = styled.TouchableOpacity`
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
`;
