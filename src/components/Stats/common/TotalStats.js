import React from 'react';
import styled, {useTheme} from 'styled-components/native';

import {t} from '../../../common/locale';
import useRegionStats from '../../shared/useRegionStats';

import NumberBlock from './NumberBlock';

import {Bar, Numbers, Left, GrowingBlock} from './TotalStats.styles';

export const StatsContainer = styled.View`
  padding-top: 15px;
  border-top-width: 1px;
  border-top-color: ${(p) => p.color || p.theme.borderLightColor};
`;

export default function TotalStats({
  total,
  recovered,
  deaths,
  active,
  deaths_new,
  color,
}) {
  const theme = useTheme();

  const stats = useRegionStats(total, recovered, deaths, active);
  return (
    <>
      <NumberBlock number={total} large color={color}>
        {t('stats.total')}
      </NumberBlock>
      <Bar items={stats} height={10} />
      <Numbers>
        <Left>
          <GrowingBlock
            fraction={stats[0].fraction}
            number={recovered}
            todayColor={theme.recoveredColor}
            color={color}>
            {t('stats.recovered')}
          </GrowingBlock>
          <NumberBlock
            number={active}
            todayColor={theme.activeColor}
            color={color}>
            {t('stats.active')}
          </NumberBlock>
        </Left>
        <NumberBlock
          number={deaths}
          today={deaths_new}
          right
          color={color}
          todayColor={theme.deathsColor}>
          {t('stats.deaths')}
        </NumberBlock>
      </Numbers>
    </>
  );
}
