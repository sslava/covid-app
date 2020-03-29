import React, {useState, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {formatNumber} from '../../../common/utils';
import {legendColor} from '../../shared/uikit';

import StatsBar from '../../shared/StatsBar/StatsBar';
import LegendItem from '../../shared/Legend/LegendItem';
import SecondaryNumber from '../../shared/SecondaryNumber';
import useCountryStats from '../../shared/useCountryStats';

import openIcon from '../../../assets/icons/open_grey.png';

import styles from './Country.styles';

export default function Country({country}) {
  const stats = useCountryStats(country);

  const [visible, setVisible] = useState(false);
  const toggle = useCallback(() => setVisible(s => !s), []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggle} style={styles.button}>
        <Text style={styles.title}>{country.country_name}</Text>
        <View style={styles.numbers}>
          <Text style={styles.number}>
            {formatNumber(country.total)}
            <SecondaryNumber num={+country.total_new} style={styles.today} />
          </Text>
          <Image source={openIcon} style={styles.openIcon} />
        </View>
      </TouchableOpacity>
      {visible && (
        <View style={styles.content}>
          <View style={styles.legend}>
            <LegendItem
              color={legendColor.Active}
              title="Болеет"
              number={country.active}
            />
            <LegendItem
              color={legendColor.Recovered}
              title="Поправилось"
              number={country.recovered}
            />
            <LegendItem
              color={legendColor.Deaths}
              title="Смертей"
              number={country.deaths}
              today={+country.deaths_new}
              bad
            />
          </View>
          <StatsBar items={stats} />
        </View>
      )}
    </View>
  );
}
