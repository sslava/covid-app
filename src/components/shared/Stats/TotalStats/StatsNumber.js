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
  number,
  today,
  color,
  todayColor,
  align,
}) {
  return (
    <Container align={align}>
      <Caption todayColor={todayColor} color={color}>
        {caption}
      </Caption>
      <Number color={color}>
        {formatNumber(+number)}
        <Today num={+today} color={todayColor} />
      </Number>
    </Container>
  );
}
