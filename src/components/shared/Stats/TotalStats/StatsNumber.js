import React from 'react';

import {formatNumber} from '../../../../common/locale';

import {
  Container,
  Caption,
  Number,
  Today,
  LargeToday,
  LargeNumber,
} from './StatsElements';

export function StatsNumberLarge({caption, number, today, color, todayColor}) {
  return (
    <Container>
      <Caption todayColor={todayColor} color={color}>
        {caption}
      </Caption>
      <LargeNumber color={color}>
        {formatNumber(+number)}
        <LargeToday num={+today} color={todayColor} />
      </LargeNumber>
    </Container>
  );
}

export function StatsNumber({
  caption,
  style,
  number,
  today,
  color,
  todayColor,
  children,
  align = 'flex-start',
}) {
  return (
    <Container align={align} style={style}>
      <Caption todayColor={todayColor} color={color}>
        {caption}
      </Caption>
      <Number color={color}>
        {formatNumber(+number)}
        <Today num={+today} color={todayColor} />
      </Number>
      {children}
    </Container>
  );
}
