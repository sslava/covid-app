import React from 'react';
import {useTheme} from 'styled-components/native';

import {t} from '../../../common/locale';
import useStatsBar from '../../shared/useStatsBar';
import {
  StatsNumber,
  StatsNumberLarge,
} from '../../shared/Stats/TotalStats/StatsNumber';

import SlidingBlocks from '../../shared/Stats/TotalStats/SlidingBlocks';

import {StatsContainer, Bar} from './TotalStatsExtended.stykes';

export default function TotalStatsExtended({country}) {
  const theme = useTheme();
  const stats = useStatsBar(
    +country.total,
    +country.recovered,
    +country.deaths,
    +country.active,
  );

  const fr = stats[0].fraction;
  return (
    <StatsContainer>
      <StatsNumberLarge caption={t('stats.total')} number={country.total} />
      <Bar items={stats} height={10} />
      <SlidingBlocks
        fraction={fr}
        left={
          <StatsNumber
            caption={t('stats.recovered')}
            number={country.recovered}
            todayColor={theme.recoveredColor}
          />
        }
        center={
          <StatsNumber
            caption={t('stats.active')}
            number={country.active}
            todayColor={theme.activeColor}
            align="center"
          />
        }
        right={
          <StatsNumber
            caption={t('stats.deaths')}
            number={country.deaths}
            today={country.deaths_new}
            todayColor={theme.deathsColor}
            align="flex-end"
          />
        }
      />
    </StatsContainer>
  );
}
