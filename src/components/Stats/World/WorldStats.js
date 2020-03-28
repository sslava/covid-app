import React, {useMemo} from 'react';
import {View, Dimensions} from 'react-native';

import Pie from '../../shared/PieChart/Pie';
import {legendColor} from '../../shared/uikit';

import NumberBlock from './NumberBlock';
import PercentCounter from './PercentCounter';

const {width} = Dimensions.get('window');

import styles from './WorldStats.styles';

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
              title="Активных"
              number={region.active / region.total}
              color={legendColor.Active}
            />
            <PercentCounter
              title="Выздоровело"
              number={region.recovered / region.total}
              color={legendColor.Recovered}
            />
            <PercentCounter
              title="Смертей"
              number={region.deaths / region.total}
              color={legendColor.Deaths}
            />
          </View>
        </View>
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Случаев всего"
          number={region.total}
          today={region.total_new}
          color={legendColor.Confirmed}
          total={region.total}
        />
        <NumberBlock
          title="Выздоровело"
          number={region.recovered}
          color={legendColor.Recovered}
          total={region.total}
        />
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Болеет"
          number={region.active}
          color={legendColor.Active}
          total={region.total}
        />
        <NumberBlock
          title="Смертей"
          number={region.deaths}
          today={region.deaths_new}
          color={legendColor.Deaths}
          total={region.total}
        />
      </View>
    </View>
  );
}
