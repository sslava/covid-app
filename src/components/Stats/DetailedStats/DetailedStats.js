import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import LegendItem from './LegendItem';
import StatsBar from './StatsBar';

import styles from './DetailedStats.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DetailedStats({title, country}) {
  const stats = useMemo(() => {
    return [
      {color: '#06CAFD', width: '40%'},
      {color: '#FF5C4D', width: '20%'},
      {color: 'green', width: '20%'},
    ];
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.updateDate}>Обновлено {'25.03.2020'}</Text>
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      <View style={styles.legend}>
        <LegendItem color="" title="Подтверждено" number={country.total} />
        <LegendItem
          color="#06CAFD"
          title="Поправилось"
          number={country.recovered}
        />
        <LegendItem color="#FF5C4D" title="Умерло" number={country.death} />
      </View>
      <TouchableOpacity style={styles.cities}>
        <Text style={styles.citiesCaption}>Статистика по городам</Text>
      </TouchableOpacity>
    </View>
  );
}
