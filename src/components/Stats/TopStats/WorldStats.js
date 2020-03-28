import React, {useMemo} from 'react';
import {View} from 'react-native';
import Pie from '../../shared/PieChart/Pie';
import {legendColor} from '../../shared/uikit';

import NumberBlock from './NumberBlock';
import PercentCounter from './PercentCounter';

import styles from './WorldStats.styles';

const getPieData = (total, recovered, deaths) => {
  const active = total - deaths - recovered;
  return [
    {index: 0, number: active / total, fill: legendColor.Active},
    {index: 1, number: deaths / total, fill: legendColor.Deaths},
    {index: 2, number: recovered / total, fill: legendColor.Recovered},
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
          blankColor={legendColor.Confirmed}
        />
        <View style={styles.worldCounters}>
          <View style={styles.wcInner}>
            <PercentCounter
              title="Болеет"
              number={active / region.total}
              color={legendColor.Active}
            />
            <PercentCounter
              title="Выздоровело"
              number={region.recovered / region.total}
              color={legendColor.Recovered}
            />
            <PercentCounter
              title="Умерло"
              number={region.deaths / region.total}
              color={legendColor.Deaths}
            />
          </View>
        </View>
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Болеет"
          number={active}
          color={legendColor.Active}
          deltaColor="#FF5C4D"
          total={region.total}
        />
        <NumberBlock
          title="Выздоровело"
          number={region.recovered}
          deltaColor="#219653"
          color={legendColor.Recovered}
          total={region.total}
        />
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Умерло"
          number={region.deaths}
          delta={region.deaths_new}
          color={legendColor.Deaths}
          deltaColor="#FF5C4D"
          total={region.total}
        />
        <NumberBlock
          title="Случаев всего"
          number={region.total}
          delta={region.total_new}
          color={legendColor.Confirmed}
          deltaColor="#FF5C4D"
          total={region.total}
        />
      </View>
    </View>
  );
}
