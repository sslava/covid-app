import React from 'react';
import styled, {useTheme} from 'styled-components/native';

import {View} from 'react-native';

import {t} from '../../../common/locale';
import useStatsBar from '../../shared/useStatsBar';
import {
  StatsNumber,
  StatsNumberLarge,
} from '../../shared/Stats/TotalStats/StatsNumber';
import HorizontalBar from '../../common/charts/HorizontalBar/HorizontalBar';

import SlidingBlocks from '../../shared/Stats/TotalStats/SlidingBlocks';

export const StatsContainer = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.theme.borderLightColor};
`;

export const Bar = styled(HorizontalBar)`
  padding-vertical: 7px;
`;

export default function TotalStats({
  total,
  recovered,
  deaths,
  active,
  deaths_new,
  total_new,
}) {
  const theme = useTheme();
  const stats = useStatsBar(total, recovered, deaths, active);

  const fr = stats[0].fraction;
  return (
    <View>
      <StatsNumberLarge
        caption={t('stats.total')}
        number={total}
        today={total_new}
      />
      <Bar items={stats} height={10} />
      <SlidingBlocks
        fraction={fr}
        left={
          <StatsNumber
            caption={t('stats.recovered')}
            number={recovered}
            todayColor={theme.recoveredColor}
          />
        }
        center={
          <StatsNumber
            caption={t('stats.active')}
            number={active}
            todayColor={theme.activeColor}
            align="center"
          />
        }
        right={
          <StatsNumber
            caption={t('stats.deaths')}
            number={deaths}
            today={deaths_new}
            todayColor={theme.deathsColor}
            align="flex-end"
          />
        }
      />
    </View>
  );
}
