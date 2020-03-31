import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';

import Country from './Country';
import SearchBar from '../shared/Search/SearchBar';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import styles from './CountriesScreen.styles';

const filterCountry = (q, c) =>
  c.country_name.toLowerCase().indexOf(q) !== -1 ||
  c.country_name_en.toLowerCase().indexOf(q) !== -1;

export default function CountriesScreen() {
  const {
    state: {data},
  } = useStatsContext();

  const [countries, query, setQuery] = useDebouncedSearch(
    data.countries,
    filterCountry,
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Поиск по стране"
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={countries}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item) => item.country_name_en}
      />
    </SafeAreaView>
  );
}
