import React from 'react';
import styled, {useTheme} from 'styled-components/native';

import {View} from 'react-native';

import {t} from '../../../../common/locale';
import useStatsBar from '../../useStatsBar';
import NumberBlock from './NumberBlock';
import HorizontalBar from '../../../common/charts/HorizontalBar/HorizontalBar';

import SlidingBlocks from './SlidingBlocks';

export const StatsContainer = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.color || p.theme.borderLightColor};
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
  color,
  hideTotal = false,
  style,
}) {
  const theme = useTheme();
  const stats = useStatsBar(total, recovered, deaths, active);

  const fr = stats[0].fraction;
  return (
    <View style={style}>
      {!hideTotal && (
        <NumberBlock
          caption={t('stats.total')}
          number={total}
          large
          color={color}
          today={total_new}
        />
      )}
      <Bar items={stats} height={10} />
      <SlidingBlocks
        fraction={fr}
        left={
          <NumberBlock
            caption={t('stats.recovered')}
            number={recovered}
            color={color}
          />
        }
        center={
          <NumberBlock
            caption={t('stats.active')}
            number={active}
            color={color}
            align="center"
          />
        }
        right={
          <NumberBlock
            caption={t('stats.deaths')}
            number={deaths}
            today={deaths_new}
            color={color}
            todayColor={theme.deathsColor}
            align="flex-end"
          />
        }
      />
    </View>
  );
}
