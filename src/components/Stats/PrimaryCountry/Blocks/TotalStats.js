import React from 'react';
import {useTheme} from 'styled-components/native';

import {t} from '../../../../common/locale';
import useRegionStats from '../../../shared/useRegionStats';

import NumberBlock from './NumberBlock';

import {Container, Bar, Numbers, Left, GrowingBlock} from './TotalStats.styles';

export default function TotalStats({country, color}) {
  const theme = useTheme();

  const stats = useRegionStats(
    country.total,
    country.recovered,
    country.deaths,
    country.active,
  );
  return (
    <Container color={color}>
      <NumberBlock number={country.total} large color={color}>
        {t('stats.total')}
      </NumberBlock>
      <Bar items={stats} height={10} />
      <Numbers>
        <Left>
          <GrowingBlock
            fraction={stats[0].fraction}
            number={country.recovered}
            todayColor={theme.recoveredColor}
            color={color}>
            {t('stats.recovered')}
          </GrowingBlock>
          <NumberBlock
            number={country.active}
            todayColor={theme.activeColor}
            color={color}>
            {t('stats.active')}
          </NumberBlock>
        </Left>
        <NumberBlock
          number={country.deaths}
          today={country.deaths_new}
          right
          color={color}
          todayColor={theme.deathsColor}>
          {t('stats.deaths')}
        </NumberBlock>
      </Numbers>
    </Container>
  );
}
