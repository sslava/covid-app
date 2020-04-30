import React from 'react';
import styled, {useTheme} from 'styled-components/native';

import {View} from 'react-native';

import {t} from '../../../../common/locale';
import HorizontalBar from '../../../common/charts/HorizontalBar/HorizontalBar';

import useStatsBar from '../../useStatsBar';

import {StatsNumber} from '../../Stats/TotalStats/StatsNumber';
import SlidingBlocks from '../../Stats/TotalStats/SlidingBlocks';

export const Bar = styled(HorizontalBar)`
  padding-vertical: 7px;
`;

export default function TotalStats({region}) {
  const theme = useTheme();
  const stats = useStatsBar(
    +region.total_cases,
    +region.total_recovered,
    +region.total_deaths,
    +region.total_active,
  );

  const fr = stats[0].fraction;
  return (
    <View>
      <Bar items={stats} height={10} />
      <SlidingBlocks
        fraction={fr}
        left={
          <StatsNumber
            caption={t('stats.recovered')}
            number={region.total_recovered}
            todayColor={theme.recoveredColor}
            color="white"
          />
        }
        center={
          <StatsNumber
            caption={t('stats.active')}
            number={region.total_active}
            todayColor={theme.activeColor}
            color="white"
            align="center"
          />
        }
        right={
          <StatsNumber
            caption={t('stats.deaths')}
            number={region.total_deaths}
            today={+region.new_deaths}
            color="white"
            todayColor={theme.deathsColor}
            align="flex-end"
          />
        }
      />
    </View>
  );
}
