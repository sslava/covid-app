import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.ScrollView`
  background-color: ${(p) => p.theme.primaryBackground};
  margin-top: 12px;
  padding-bottom: 6px;
`;

export const ScrollIndicator = styled.View`
  flex-direction: row;
  height: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled(Animated.View)`
  height: 7px;
  width: 7px;
  background-color: ${(p) => p.theme.primaryTextColor};
  margin: 9px;
  border-radius: 5px;
`;
