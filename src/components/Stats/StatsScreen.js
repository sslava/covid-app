import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {useStatsContext} from '../shared/StatsDataContext';

import styles from './StatsScreen.styles';

export default function StatsScreen() {
  const {stats} = useStatsContext();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Covid 2019</Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.block}>
            <Text style={styles.all}>200 124</Text>
            <Text style={styles.info}>Всего подтвержденных случаев</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.deaths}>6 500</Text>
            <Text style={styles.info}>Всего смертей</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.recovered}>55 400</Text>
            <Text style={styles.info}>Всего выздоровело</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
