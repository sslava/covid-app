import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';

import City from './City';
import SearchBar from '../shared/Search/SearchBar';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import styles from './CitiesScreen.styles';

const filterCity = (q, c) => c.name.toLowerCase().indexOf(q) !== -1;

export default function CitiesScreen() {
  const {
    state: {data},
  } = useStatsContext();

  const [cities, query, setQuery] = useDebouncedSearch(data.cities, filterCity);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Поиск по региону"
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={cities}
        renderItem={({item}) => <City city={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
