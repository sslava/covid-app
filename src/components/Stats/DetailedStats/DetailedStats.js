import React, {useMemo} from 'react';

import {TouchableOpacity, View, Text, Image} from 'react-native';

import LegendItem from './LegendItem';
import StatsBar from './StatsBar';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';
import openIcon from '../../../assets/icons/open_grey.png';

import styles from './DetailedStats.styles';

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
        />
        <LegendItem color={legendColor.Active} title="Болеет" number={active} />
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
        <Image source={openIcon} style={styles.openIcon} />
      </TouchableOpacity>
    </View>
  );
}
