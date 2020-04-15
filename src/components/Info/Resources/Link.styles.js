import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.linkBackground};
`;

export const Subtitle = styled.View`
  padding-top: 5px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu';
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
  margin-bottom: 3px;
`;

export const UrlText = styled.Text`
  font-family: 'Ubuntu';
  font-size: 13px;
  line-height: 18px;
  font-weight: bold;
  color: #007aff;
`;

export const UrlIcon = styled.Image`
  tint-color: #007aff;
  margin-left: 8px;
  width: 12px;
  height: 12px;
`;
