import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {formatNumber} from '../../common/utils';
import {legendColor} from '../shared/uikit';

import StatsBar from '../shared/StatsBar/StatsBar';
import LegendItem from '../shared/Legend/LegendItem';

import openIcon from '../../assets/icons/open_grey.png';

import styles from './City.styles';

export default function City({city}) {
  const active = city.total - city.recovered - city.deaths;
  const stats = useMemo(() => {
    return [
      {
        color: legendColor.Active,
        fraction: active / city.total,
      },
      {
        color: legendColor.Recovered,
        fraction: city.recovered / city.total,
      },
      {
        color: legendColor.Deaths,
        fraction: city.deaths / city.total,
      },
    ];
  }, [city.total, city.recovered, city.deaths, active]);

  const [visible, setVisible] = useState(false);

  const toggle = useCallback(() => setVisible((s) => !s), []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggle}
        style={styles.button}
        activeOpacity={0.5}>
        <Text style={styles.title}>{city.name}</Text>
        <View style={styles.numbers}>
          <Text style={styles.number}>{formatNumber(city.total)}</Text>
          <Image
            source={openIcon}
            style={[
              styles.openIcon,
              {transform: [{rotate: visible ? '90deg' : '0deg'}]},
            ]}
          />
        </View>
      </TouchableOpacity>
      {visible && (
        <View style={styles.content}>
          <View style={styles.legend}>
            <LegendItem
              color={legendColor.Active}
              title="Болеет"
              number={active}
            />
            <LegendItem
              color={legendColor.Recovered}
              title="Поправилось"
              number={city.recovered}
            />
            <LegendItem
              color={legendColor.Deaths}
              title="Смертей"
              number={city.deaths}
              bad
            />
          </View>
          <StatsBar items={stats} height={8} />
        </View>
      )}
    </View>
  );
}
