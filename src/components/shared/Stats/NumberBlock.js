import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {formatNumber} from '../../../common/locale';
import SecondaryNumber from '../SecondaryNumber';

const Caption = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  text-align: ${(p) => (p.right ? 'right' : 'left')}
  color: ${(p) => p.color || p.todayColor || p.theme.primaryTextColor};
`;

const Number = styled.Text`
  font-size: ${(p) => (p.large ? 36 : 18)}px;
  line-height: ${(p) => (p.large ? 43 : 21)}px;
  font-weight: 500;
  text-align: ${(p) => (p.right ? 'right' : 'left')}
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

const Today = styled(SecondaryNumber)`
  font-weight: 500;
  font-size: ${(p) => (p.large ? 21 : 13)}px;
  line-height: 26px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export default function NumberBlock({
  children,
  style,
  number,
  today,
  right,
  color,
  todayColor,
  large = false,
}) {
  return (
    <View style={style}>
      <Caption
        right={right}
        numberOfLines={1}
        todayColor={todayColor}
        color={color}>
        {children}
      </Caption>
      <Number large={large} right={right} numberOfLines={1} color={color}>
        {formatNumber(number)}
        <Today large={large} num={+today} color={todayColor} />
      </Number>
    </View>
  );
}
