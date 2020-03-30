import React, {useState, useMemo} from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';

import Country from './Country';
import SearchBar from './SearchBar';

import styles from './CountriesScreen.styles';

export default function CountriesScreen() {
  const [query, setQuery] = useState('');
  const {
    state: {data},
  } = useStatsContext();

  const obj = data.countries.reduce((all, next) => {
    all[next.country_name_en] = (all[next.country_name_en] || 0) + 1;
    return all;
  }, {});
  console.log(Reflect.ownKeys(obj).filter((key) => obj[key] > 1));

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={query} onChange={setQuery} />
      <FlatList
        style={styles.flatList}
        data={data.countries}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item) => item.country_name_en}
      />
    </SafeAreaView>
  );
}
