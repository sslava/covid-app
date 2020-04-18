import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

import {formatNumber} from '../../../../common/locale';
import SecondaryNumber from '../../../shared/SecondaryNumber';

const Caption = styled.Text`
  font-size: 13px;
  line-height: 18px;
  text-align: ${(p) => (p.right ? 'right' : 'left')}
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

const Number = styled.Text`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  text-align: ${(p) => (p.right ? 'right' : 'left')}
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

const Today = styled(SecondaryNumber)`
  font-weight: 500;
  font-size: 13px;
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
}) {
  return (
    <View style={style}>
      <Caption right={right} numberOfLines={1} color={color}>
        {children}
      </Caption>
      <Number right={right} numberOfLines={1} color={color}>
        {formatNumber(number)}
        <Today num={today} color={todayColor} />
      </Number>
    </View>
  );
}
