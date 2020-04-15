import React from 'react';

import {formatNumber, t} from '../../../common/locale';

import {Container, Num, Cases, Today} from './HeroStats.styles';

export default function HeroStats({number, today}) {
  return (
    <Container>
      <Num>
        {formatNumber(number)}
        <Today num={today} />
      </Num>
      <Cases>{t('stats.cases')}</Cases>
    </Container>
  );
}
