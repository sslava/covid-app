import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';

import City from './City';
import SearchBar from '../shared/SearchBar';

import useDebouncedSearch from '../shared/useDebounceSearch';

import styles from './CitiesScreen.styles';

const filterCity = (q, c) => c.name.toLowerCase().indexOf(q) !== -1;

export default function CitiesScreen() {
  const {
    state: {data},
  } = useStatsContext();

  const [cities, query, setQuery] = useDebouncedSearch(data.cities, filterCity);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={query} onChange={setQuery} />
      <FlatList
        style={styles.flatList}
        data={cities}
        renderItem={({item}) => <City city={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
