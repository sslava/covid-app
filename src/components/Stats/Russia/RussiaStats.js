import React from 'react';

import {View, Text} from 'react-native';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import SecondaryNumber from '../../shared/SecondaryNumber';
import useCountryStats from '../../shared/useCountryStats';

import styles from './RussiaStats.styles';

export default function RussiaStats({title, country}) {
  const stats = useCountryStats(country);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerNumber}>
          {country.total}
          <SecondaryNumber num={country.total_new} style={styles.today} />
        </Text>
        <Text style={styles.bannerText}>Случаев заболевания</Text>
      </View>
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Active}
          title="Болеет"
          number={country.active}
        />
        <LegendItem
          color={legendColor.Recovered}
          title="Поправилось"
          number={country.recovered}
        />
        <LegendItem
          color={legendColor.Deaths}
          title="Смертей"
          number={country.deaths}
          today={+country.deaths_new}
          bad
        />
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
    </View>
  );
}
