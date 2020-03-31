import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text} from 'react-native';

import {formatDate} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import LegendItem from '../../shared/Legend/LegendItem';
import StatsBar from '../../shared/StatsBar/StatsBar';
import useCountryStats from '../../shared/useCountryStats';

import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';
import PageLink from '../common/PageLink';

import ruIcon from './ru.png';

import styles from './RussiaStats.styles';

export default function RussiaStats({russia, hasCities}) {
  const nav = useNavigation();
  const stats = useCountryStats(russia);

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
        />
      </View>
      <View style={styles.bar}>
        <StatsBar items={stats} />
      </View>
      {!!hasCities && <PageLink route="Cities">В регионах</PageLink>}
      <Text style={styles.updatedText}>
        По состоянию на {formatDate(russia.updated)}
      </Text>
    </View>
  );
}
