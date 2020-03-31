import React from 'react';
import {SafeAreaView, FlatList, View, RefreshControl} from 'react-native';

import City from './City';
import SearchBar from '../shared/Search/SearchBar';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';

import styles from './CitiesScreen.styles';

const filterCity = (q, c) => c.name.toLowerCase().indexOf(q) !== -1;

export default function CitiesScreen() {
  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();

  const [refresh, refreshing] = useRefresh(refreshStats, fetchState);

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
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        style={styles.flatList}
        data={cities}
        renderItem={({item}) => <City city={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
