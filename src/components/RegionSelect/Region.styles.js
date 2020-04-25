import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding-horizontal: 20px;
  height: 44px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom-color: ${(p) => p.theme.borderLightColor};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: ${(p) => p.theme.borderLightColor};
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Selected = styled.Image`
  margin-right: 10px;
  tint-color: #007aff;
  width: 16px;
  height: 16px;
`;
