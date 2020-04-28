import React from 'react';
import styled, {useTheme} from 'styled-components/native';

import {t} from '../../../../common/locale';
import useStatsBar from '../../useStatsBar';

import HorizontalBar from '../../../common/charts/HorizontalBar/HorizontalBar';
import SlidingBlocks from '../../Stats/TotalStats/SlidingBlocks';
import {
  StatsNumber,
  StatsNumberLarge,
} from '../../Stats/TotalStats/StatsNumber';

const StatsContainer = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.theme.borderLightColor};
`;

const Bar = styled(HorizontalBar)`
  padding-vertical: 7px;
`;

export default function CountryStats({country}) {
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
      <StatsNumberLarge
        caption={t('stats.total')}
        number={country.total}
        color="white"
      />
      <Bar items={stats} height={10} />
      <SlidingBlocks
        fraction={fr}
        left={
          <StatsNumber
            caption={t('stats.recovered')}
            number={country.recovered}
            color="white"
          />
        }
        center={
          <StatsNumber
            caption={t('stats.active')}
            number={country.active}
            color="white"
            align="center"
          />
        }
        right={
          <StatsNumber
            caption={t('stats.deaths')}
            number={country.deaths}
            today={country.deaths_new}
            todayColor={theme.deathsColor}
            color="white"
            align="flex-end"
          />
        }
      />
    </StatsContainer>
  );
}
