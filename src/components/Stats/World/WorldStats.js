import React, {useMemo} from 'react';
import {t} from 'i18n-js';
import {View, Dimensions, Text, Image} from 'react-native';

import Pie from '../../shared/PieChart/Pie';
import {legendColor} from '../../shared/uikit';
import {formatDate} from '../../../common/locale';

import PercentCounter from './PercentCounter';
import Subheader from '../common/Subheader';
import HeroStats from '../common/HeroStats';

import worldIcon from './world.png';

import styles from './WorldStats.styles';

const {width} = Dimensions.get('window');

const getPieData = (total, recovered, deaths, active) => {
  return [
    {index: 0, number: active / total, fill: legendColor.Active},
    {index: 1, number: deaths / total, fill: legendColor.Deaths},
    {index: 2, number: recovered / total, fill: legendColor.Recovered},
  ];
};

export default function WorldStats({world}) {
  const data = useMemo(
    () => getPieData(world.total, world.recovered, world.deaths, world.active),
    [world.total, world.recovered, world.deaths, world.active],
  );
  return (
    <View style={styles.container}>
      <Subheader
        icon={<Image source={worldIcon} style={styles.worldIcon} />}
        title={t('stats.global.title')}
      />
      <HeroStats number={world.total} today={+world.total_new} />
      <View style={styles.stats}>
        <Pie
          data={data}
          size={width / 2 - 40}
          innerRadius={67}
          blankColor={legendColor.Confirmed}
        />
        <View style={styles.counters}>
          <PercentCounter
            title={t('stats.active')}
            number={world.active}
            color={legendColor.Active}
          />
          <PercentCounter
            title={t('stats.recovered')}
            number={world.recovered}
            color={legendColor.Recovered}
          />
          <PercentCounter
            title={t('stats.deaths')}
            number={world.deaths}
            today={world.deaths_new}
            color={legendColor.Deaths}
          />
        </View>
      </View>
      <Text style={styles.updatedText}>
        {t('stats.global.updatedAt', {date: formatDate(world.updated)})}
      </Text>
    </View>
  );
}
