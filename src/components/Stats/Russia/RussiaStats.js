import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, TouchableOpacity} from 'react-native';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import useCountryStats from '../../shared/useCountryStats';

import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';

import ruIcon from './ru.png';

import styles from './RussiaStats.styles';

export default function RussiaStats({russia, hasCities}) {
  const nav = useNavigation();
  const stats = useCountryStats(russia);

  const openCities = useCallback(() => nav.navigate('Cities'), [nav]);

  return (
    <View style={styles.container}>
      <Subheader icon={ruIcon}>В России</Subheader>
      <HeroStats number={russia.total} today={russia.total_new} />
      <View style={styles.legend}>
        <LegendItem
          color={legendColor.Active}
          title="Болеет"
          number={russia.active}
        />
        <LegendItem
          color={legendColor.Recovered}
          title="Поправилось"
          number={russia.recovered}
        />
        <LegendItem
          color={legendColor.Deaths}
          title="Смертей"
          number={russia.deaths}
          today={+russia.deaths_new}
          bad
        />
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      {!!hasCities && (
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.all}
            onPress={openCities}
            activeOpacity={0.3}>
            <Text style={styles.allCaption}>В регионах</Text>
          </TouchableOpacity>
        </View>
      )}
      <Text style={styles.updatedText}>
        По состоянию на {formatDate(russia.updated)}, прирост за последние 24
      </Text>
    </View>
  );
}
