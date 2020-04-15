import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  margin-bottom: 10px;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.phoneBackground};
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  color: #007aff;
`;

export const Subtitle = styled.View`
  padding-top: 5px;
  flex-direction: row;
`;

export const PhoneText = styled.Text`
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const PhoneIcon = styled.Image`
  tint-color: #007aff;
  margin-left: 10px;
  width: 24px;
  height: 24px;
`;
