import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

import SecondaryNumber from '../SecondaryNumber';

export const Container = styled.View`
  border-bottom-color: ${(p) => p.theme.borderLightColor};
  border-top-color: ${(p) => p.theme.borderLightColor};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  background-color: ${(p) =>
    p.expanded ? p.theme.expandedRegionColor : 'transparent'};
`;

export const Button = styled.TouchableOpacity`
  position: relative;
  padding-horizontal: 20px;
  height: 44px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const Today = styled(SecondaryNumber)`
  margin-left: 3px;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  color: ${(p) => p.theme.activeColor};
`;

export const Icon = styled(Animated.Image)`
  position: absolute;
  right: 20px;
  top: 14px;
  width: 20px;
  height: 20px;
  margin-left: 8px;
  tint-color: #8e8e93;
`;
