import React, {useMemo} from 'react';
import {View, Dimensions, Text} from 'react-native';

import Pie from '../../shared/PieChart/Pie';
import {legendColor} from '../../shared/uikit';
import {formatNumber, formatDate} from '../../../common/utils';

import PercentCounter from './PercentCounter';
import SecondaryNumber from '../../shared/SecondaryNumber';

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
      <View style={styles.banner}>
        <Text style={styles.bannerNumber}>
          {formatNumber(region.total)}
          <SecondaryNumber num={region.total_new} style={styles.today} />
        </Text>
        <Text style={styles.bannerText}>Случаев заболевания</Text>
      </View>
      <View style={styles.worldStats}>
        <Pie
          data={data}
          size={(width - 48) / 2}
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
          По данным на {formatDate(region.updated)}
        </Text>
      </View>
    </View>
  );
}
