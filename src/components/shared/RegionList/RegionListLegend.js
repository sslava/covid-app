import React from 'react';
import {useTheme} from 'styled-components/native';

import useStatsBar from '../useStatsBar';

import {t} from '../../../common/locale';

import HorizontalBar from '../../common/charts/HorizontalBar/HorizontalBar';
import {PrimaryButton} from '../../common/Button';
import {DetailsIcon} from '../../common/buttonIcons';

import LegendItem from './LegendItem';

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
  const stats = useStatsBar(total, recovered, deaths, active);
  return (
    <Content>
      <HorizontalBar items={stats} height={10} />
      <Legend>
        <LegendItem
          title={t('stats.total')}
          number={total}
          skipToday={skipToday}
        />
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
        <PrimaryButton onPress={onDetails} icon={<DetailsIcon color="white" />}>
          {t('stats.country.details')}
        </PrimaryButton>
      )}
    </Content>
  );
}
