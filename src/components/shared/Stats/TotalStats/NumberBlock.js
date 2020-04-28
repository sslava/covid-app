import React from 'react';
import styled from 'styled-components/native';

import {formatNumber} from '../../../../common/locale';
import SecondaryNumber from '../../SecondaryNumber';

const Container = styled.View`
  align-items: ${(p) => p.align};
`;

const Caption = styled.Text`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

const Number = styled.Text`
  font-size: ${(p) => (p.large ? 36 : 18)}px;
  line-height: ${(p) => (p.large ? 43 : 21)}px;
  font-weight: 500;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

const Today = styled(SecondaryNumber)`
  font-weight: 500;
  font-size: ${(p) => (p.large ? 21 : 13)}px;
  line-height: 26px;
  color: ${(p) => p.color || p.theme.primaryTextColor};
`;

export default function NumberBlock({
  caption,
  style,
  number,
  today,
  color,
  todayColor,
  align = 'flex-start',
  large = false,
}) {
  return (
    <Container align={align} style={style}>
      <Caption numberOfLines={1} todayColor={todayColor} color={color}>
        {caption}
      </Caption>
      <Number large={large} numberOfLines={1} color={color}>
        {formatNumber(number)}
        <Today large={large} num={+today} color={todayColor} />
      </Number>
    </Container>
  );
}
