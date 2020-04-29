import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Slide = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 20px;
  width: ${width}px;
`;

export const ChartContainer = styled.View`
  padding-top: 15px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const Dates = styled.Text`
  padding-right: 10px;
  margin-top: 6px;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: ${(p) => p.theme.secondaryTextColor};
`;

export const Values = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const Value = styled.View`
  flex: 1;
`;

export const ValueTitle = styled.Text`
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export const ValueNumber = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${(p) => p.theme.primaryTextColor};
`;
