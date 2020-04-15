import React from 'react';

import {formatNumber} from '../../../common/locale';

import {WC, Circle, Title, Num, Today} from './PercentCounter.styles';

export default function PercentCounter({title, number, color, today}) {
  return (
    <WC>
      <Circle color={color} />
      <Title>{title}</Title>
      <Num>
        {formatNumber(number)}
        <Today num={today} />
      </Num>
    </WC>
  );
}
