import React from 'react';
import {View} from 'react-native';

import {legendColor} from '../../shared/uikit';
import useRegionStats from '../../shared/useRegionStats';

import StatsBar from '../StatsBar/StatsBar';
import LegendItem from '../Legend/LegendItem';

import styles from './RegionListLegend.styles';

export default function RegionListLegend({
  total,
  active,
  recovered,
  deaths,
  deaths_new,
}) {
  const stats = useRegionStats(total, recovered, deaths, active);
  return (
    <View style={styles.content}>
      <View style={styles.legend}>
        <LegendItem color={legendColor.Active} title="Болеет" number={active} />
        <LegendItem
          color={legendColor.Recovered}
          title="Поправилось"
          number={recovered}
        />
        <LegendItem
          color={legendColor.Deaths}
          title="Смертей"
          number={deaths}
          today={+deaths_new}
          bad
        />
      </View>
      <StatsBar items={stats} height={10} />
    </View>
  );
}
