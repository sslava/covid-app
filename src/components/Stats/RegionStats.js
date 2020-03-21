import React, {useMemo} from 'react';
import {View, Text, Dimensions} from 'react-native';

import Pie from '../shared/Pie';

const {width} = Dimensions.get('window');

import styles from './RegionStats.styles';

function NumberBlock({number, total, title, color}) {
  return (
    <View style={styles.numberBlock}>
      <View style={styles.numberBlockLine}>
        {color && (
          <View style={[styles.numberBlockColor, {backgroundColor: color}]} />
        )}
        <Text style={styles.numberBlockTitle}>{title}</Text>
      </View>
      <Text style={styles.numberBlockNumber}>{number}</Text>
    </View>
  );
}

const getPieData = (total, alive, death) => {
  const active = total - death - alive;
  return [
    {index: 0, number: active / total, fill: '#003cbf'},
    {index: 1, number: death / total, fill: '#ff5c4d'},
    {index: 2, number: alive / total, fill: '#0ccafd'},
  ];
};

export default function RegionStats({region}) {
  const data = useMemo(
    () => getPieData(region.total, region.alive, region.deaths),
    [region.total, region.alive, region.deaths],
  );
  return (
    <View style={styles.container}>
      <View style={styles.pieStats}>
        <View style={styles.pieContainer}>
          <Pie
            data={data}
            style={styles.pie}
            width={width - 150}
            height={width - 150}
            innerRadius={75}
            blankColor={'#eeeef3'}
          />
          <View style={styles.total}>
            <Text style={styles.totalCaption}>Случаев{'\n'}заболевания</Text>
            <Text style={styles.totalNumber}>{region.total}</Text>
          </View>
        </View>
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Dыздоровело"
          number={region.alive}
          color="#0ccafd"
          total={region.total}
        />
        <NumberBlock
          title="Умерло"
          number={region.deaths}
          color="#ff5c4d"
          total={region.total}
        />
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Болеет"
          number={region.total - region.deaths - region.alive}
          color="#003cbf"
          total={region.total}
        />
        <NumberBlock
          title="Случаев всего"
          number={region.total}
          total={region.total}
        />
      </View>
    </View>
  );
}
