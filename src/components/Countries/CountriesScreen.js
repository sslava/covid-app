import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';

import Country from './Country';

import styles from './CountriesScreen.styles';

export default function CountriesScreen() {
  const {
    state: {data},
  } = useStatsContext();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={data.countries}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item) => item.country_name_en}
      />
    </SafeAreaView>
  );
}
