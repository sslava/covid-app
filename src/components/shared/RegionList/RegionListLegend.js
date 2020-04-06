import React from 'react';
import {View} from 'react-native';

import {legendColor} from '../../shared/uikit';
import useRegionStats from '../../shared/useRegionStats';

import {t} from '../../../common/locale';

import StatsBar from '../StatsBar/StatsBar';
import LegendItem from '../Legend/LegendItem';

import styles from './RegionListLegend.styles';

export default function RegionListLegend({
  total,
  active,
  recovered,
  deaths,
  deaths_new,
  skipToday,
}) {
  const stats = useRegionStats(total, recovered, deaths, active);
  return (
    <View style={styles.content}>
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Active}
          title={t('stats.active')}
          number={active}
          skipToday={skipToday}
        />
        <LegendItem
          color={legendColor.Recovered}
          title={t('stats.recovered')}
          number={recovered}
          skipToday={skipToday}
        />
        <LegendItem
          color={legendColor.Deaths}
          title={t('stats.deaths')}
          number={deaths}
          today={+deaths_new}
          skipToday={skipToday}
        />
      </View>
      <StatsBar items={stats} height={10} />
    </View>
  );
}
