import React, {useMemo} from 'react';

import {TouchableOpacity, View, Text, Image} from 'react-native';

import LegendItem from './LegendItem';
import StatsBar from './StatsBar';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';
import openIcon from '../../../assets/icons/open_grey.png';

import styles from './RussiaStats.styles';

export default function RussiaStats({title, country}) {
  const stats = useMemo(() => {
    return [
      {
        color: legendColor.Active,
        fraction: country.active / country.total,
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
  }, [country.total, country.recovered, country.deaths, country.active]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.updateDate}>
          Обновлено{' '}
          <Text style={styles.date}>{formatDate(country.updated)}</Text>
        </Text>
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Confirmed}
          title="Подтверждено"
          number={country.total}
          today={+country.total_new}
          bad
        />
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
      <TouchableOpacity style={styles.cities}>
        <Text style={styles.citiesCaption}>Статистика по городам</Text>
        <Image source={openIcon} style={styles.openIcon} />
      </TouchableOpacity>
    </View>
  );
}
