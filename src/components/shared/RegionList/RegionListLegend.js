import React from 'react';
import {useTheme} from 'styled-components/native';

import useRegionStats from '../../shared/useRegionStats';

import {t} from '../../../common/locale';

import StatsBar from '../StatsBar/StatsBar';
import LegendItem from '../Legend/LegendItem';
import {PrimaryButton} from '../Button';

import {Content, Legend} from './RegionListLegend.styles';

export default function RegionListLegend({
  total,
  active,
  recovered,
  deaths,
  deaths_new,
  skipToday,
  onDetails,
}) {
  const theme = useTheme();
  const stats = useRegionStats(total, recovered, deaths, active);
  return (
    <Content>
      <StatsBar items={stats} height={10} />
      <Legend>
        <LegendItem
          color={theme.recoveredColor}
          title={t('stats.recovered')}
          number={recovered}
          skipToday={skipToday}
        />
        <LegendItem
          color={theme.activeColor}
          title={t('stats.active')}
          number={active}
          skipToday={skipToday}
        />
        <LegendItem
          color={theme.deathsColor}
          title={t('stats.deaths')}
          number={deaths}
          today={+deaths_new}
          skipToday={skipToday}
        />
      </Legend>
      {onDetails && (
        <PrimaryButton onPress={onDetails}>
          {t('stats.country.details')}
        </PrimaryButton>
      )}
    </Content>
  );
}
