import React from 'react';
import {useTheme} from 'styled-components/native';

import {t} from '../../../common/locale';
import useRegionStats from '../../shared/useRegionStats';

import NumberBlock from './NumberBlock';

import {Container, Bar, Numbers, Left, GrowingBlock} from './TotalStats.styles';

export default function TotalStats({country}) {
  const stats = useRegionStats(
    country.total,
    country.recovered,
    country.deaths,
    country.active,
  );
  const theme = useTheme();
  return (
    <Container>
      <NumberBlock number={country.total}>
        {t('stats.country.total')}
      </NumberBlock>
      <Bar items={stats} height={10} />
      <Numbers>
        <Left>
          <GrowingBlock fraction={stats[0].fraction} number={country.active}>
            {t('stats.active')}
          </GrowingBlock>
          <NumberBlock number={country.recovered}>
            {t('stats.recovered')}
          </NumberBlock>
        </Left>
        <NumberBlock
          number={country.deaths}
          today={country.deaths_new}
          right
          color={theme.deathsColor}>
          {t('stats.deaths')}
        </NumberBlock>
      </Numbers>
    </Container>
  );
}
