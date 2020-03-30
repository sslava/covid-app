import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import openIcon from '../../../assets/icons/open_grey.png';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import SecondaryNumber from '../../shared/SecondaryNumber';
import useCountryStats from '../../shared/useCountryStats';

import styles from './RussiaStats.styles';

export default function RussiaStats({russia, hasCities}) {
  const nav = useNavigation();
  const stats = useCountryStats(russia);

  const openCities = useCallback(() => nav.navigate('Cities'), [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>В России</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerNumber}>
          {russia.total}
          <SecondaryNumber num={russia.total_new} style={styles.today} />
        </Text>
        <Text style={styles.bannerText}>Случаев заболевания</Text>
      </View>
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
      <View style={styles.updated}>
        <Text style={styles.updatedText}>
          По состоянию на {formatDate(russia.updated)}
        </Text>
      </View>
      {!!hasCities && (
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.all}
            onPress={openCities}
            activeOpacity={0.3}>
            <Text style={styles.allCaption}>В регионах</Text>
            <Image source={openIcon} style={styles.allIcon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
