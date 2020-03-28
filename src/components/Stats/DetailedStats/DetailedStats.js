import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import LegendItem from './LegendItem';
import StatsBar from './StatsBar';
import {legendColor} from '../../shared/uikit';

import styles from './DetailedStats.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DetailedStats({title, country}) {
  const active = country.total - country.recovered - country.deaths;
  const stats = useMemo(() => {
    return [
      {
        color: legendColor.Active,
        fraction: active / country.total,
      },
      {
        color: legendColor.Recovered,
        fraction: country.recovered / country.total,
      },
      {
        color: legendColor.Deaths,
        fraction: country.deaths / country.total,
      },
    ];
  }, [country.total, country.recovered, country.deaths, active]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.updateDate}>Обновлено {country.updateDate}</Text>
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Confirmed}
          title="Подтверждено"
          number={country.total}
        />
        <LegendItem
          color={legendColor.Recovered}
          title="Болеет"
          number={active}
        />
        <LegendItem
          color={legendColor.Recovered}
          title="Поправилось"
          number={country.recovered}
        />
        <LegendItem
          color={legendColor.Deaths}
          title="Умерло"
          number={country.deaths}
        />
      </View>
      <TouchableOpacity style={styles.cities}>
        <Text style={styles.citiesCaption}>Статистика по городам</Text>
      </TouchableOpacity>
    </View>
  );
}
