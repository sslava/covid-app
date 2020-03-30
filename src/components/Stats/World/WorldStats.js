import React, {useMemo} from 'react';
import {View, Dimensions, Text} from 'react-native';

import Pie from '../../shared/PieChart/Pie';
import {legendColor} from '../../shared/uikit';
import {formatDate} from '../../../common/utils';

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

export default function WorldStats({region}) {
  const data = useMemo(
    () =>
      getPieData(region.total, region.recovered, region.deaths, region.active),
    [region.total, region.recovered, region.deaths, region.active],
  );
  return (
    <View style={styles.container}>
      <Subheader icon={worldIcon}>В мире</Subheader>
      <HeroStats number={region.total} today={region.total_new} />
      <View style={styles.worldStats}>
        <Pie
          data={data}
          size={width / 2 - 40}
          innerRadius={70}
          blankColor={legendColor.Confirmed}
        />
        <View style={styles.worldCounters}>
          <View style={styles.wcInner}>
            <PercentCounter
              title="Болеет"
              number={region.active}
              color={legendColor.Active}
            />
            <PercentCounter
              title="Выздоровело"
              number={region.recovered}
              color={legendColor.Recovered}
            />
            <PercentCounter
              title="Смертей"
              number={region.deaths}
              today={region.deaths_new}
              color={legendColor.Deaths}
            />
          </View>
        </View>
      </View>
      <View style={styles.updated}>
        <Text style={styles.updatedText}>
          По состоянию на {formatDate(region.updated)}
        </Text>
      </View>
    </View>
  );
}
