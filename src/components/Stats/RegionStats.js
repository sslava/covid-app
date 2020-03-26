import React, {useMemo} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Pie from '../shared/PieChart/Pie';

import {images} from '../shared/countryImages';
import {formatNumber} from '../../common/utils';

import styles from './RegionStats.styles';

const {width} = Dimensions.get('window');

function NumberBlock({number, total, title, color}) {
  return (
    <View style={styles.numberBlock}>
      <View style={styles.numberBlockLine}>
        {color && (
          <View style={[styles.numberBlockColor, {backgroundColor: color}]} />
        )}
        <Text style={styles.numberBlockTitle}>{title}</Text>
      </View>
      <Text style={styles.numberBlockNumber}>{formatNumber(number)}</Text>
    </View>
  );
}

const getPieData = (total, recovered, death) => {
  const active = total - death - recovered;
  return [
    {index: 0, number: active / total, fill: '#003cbf'},
    {index: 1, number: death / total, fill: '#ff5c4d'},
    {index: 2, number: recovered / total, fill: '#0ccafd'},
  ];
};

export default function RegionStats({region}) {
  const data = useMemo(
    () => getPieData(region.total, region.recovered, region.deaths),
    [region.total, region.recovered, region.deaths],
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
            <Text style={styles.totalNumber}>{formatNumber(region.total)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.numberStats}>
        <NumberBlock
          title="Выздоровело"
          number={region.recovered}
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
          number={region.total - region.deaths - region.recovered}
          color="#003cbf"
          total={region.total}
        />
        <NumberBlock
          title="Случаев всего"
          number={region.total}
          total={region.total}
        />
      </View>
      <View style={styles.country}>
        <Image style={[styles.img]} source={images[region.country_name_en]} />
      </View>
    </View>
  );
}
