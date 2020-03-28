import React, {useMemo} from 'react';
import {View} from 'react-native';
import Pie from '../../shared/PieChart/Pie';

import NumberBlock from './NumberBlock';
import PercentCounter from './PercentCounter';

import styles from './WorldStats.styles';

const getPieData = (total, recovered, death) => {
  const active = total - death - recovered;
  return [
    {index: 0, number: active / total, fill: '#003cbf'},
    {index: 1, number: death / total, fill: '#ff5c4d'},
    {index: 2, number: recovered / total, fill: '#0ccafd'},
  ];
};

export default function WorldStats({region}) {
  const data = useMemo(
    () => getPieData(region.total, region.recovered, region.deaths),
    [region.total, region.recovered, region.deaths],
  );
  const active = region.total - region.deaths - region.recovered;
  return (
    <View style={styles.container}>
      <View style={styles.worldStats}>
        <Pie
          data={data}
          width={220}
          height={220}
          innerRadius={70}
          blankColor="#eeeef3"
        />
        <View style={styles.worldCounters}>
          <View style={styles.wcInner}>
            <PercentCounter
              title="Болеет"
              number={((active / region.total) * 100).toFixed(2)}
              color="#003cbf"
            />
            <PercentCounter
              title="Выздоровело"
              number={((region.recovered / region.total) * 100).toFixed(2)}
              color="#0ccafd"
            />
            <PercentCounter
              title="Умерло"
              number={((region.deaths / region.total) * 100).toFixed(2)}
              color="#ff5c4d"
            />
          </View>
        </View>
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Болеет"
          number={active}
          color="#003cbf"
          deltaColor="#FF5C4D"
          total={region.total}
        />
        <NumberBlock
          title="Выздоровело"
          number={region.recovered}
          deltaColor="#219653"
          color="#0ccafd"
          total={region.total}
        />
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Умерло"
          number={region.deaths}
          delta={region.deaths_new}
          color="#ff5c4d"
          deltaColor="#FF5C4D"
          total={region.total}
        />
        <NumberBlock
          title="Случаев всего"
          number={region.total}
          delta={region.total_new}
          deltaColor="#FF5C4D"
          total={region.total}
        />
      </View>
    </View>
  );
}
