import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';
import HeaderScrollView from '../shared/HeaderScrollView';

import styles from './StatsScreen.styles';

export default function StatsScreen({navigation}) {
  const {stats} = useStatsContext();
  return (
    <HeaderScrollView title="COVID-19">
      <View style={styles.stats}>
        <View style={styles.block}>
          <Text style={styles.all}>{stats.russia.total}</Text>
          <Text style={styles.info}>Всего подтвержденных случаев</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.deaths}>{stats.russia.deaths}</Text>
          <Text style={styles.info}>Всего смертей</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.recovered}>{stats.russia.alive}</Text>
          <Text style={styles.info}>Всего выздоровело</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.orange]}
          onPress={() => navigation.push('Faq')}>
          <Text style={styles.buttonText}>Как передается</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.green]}>
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.indigo]}>
          <Text style={styles.buttonText}>Профилактика</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purple]}>
          <Text style={styles.buttonText}>Симптомы</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <View style={styles.button} />
        <View style={styles.button} />
      </View>
    </HeaderScrollView>
  );
}
