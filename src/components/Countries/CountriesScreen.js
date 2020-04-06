import React from 'react';
import {t} from '../../common/locale';
import {SafeAreaView, FlatList, View, RefreshControl} from 'react-native';

import Country from './Country';
import SearchBar from '../shared/Search/SearchBar';

import {matchCountry} from '../../common/locale';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';

import styles from './CountriesScreen.styles';

export default function CountriesScreen() {
  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();

  const [refresh, refreshing] = useRefresh(refreshStats, fetchState);

  const [countries, query, setQuery] = useDebouncedSearch(
    data.countries,
    matchCountry,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t('countries.search')}
        />
      </View>
      <FlatList
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        style={styles.flatList}
        data={countries}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item) => item.code}
      />
    </SafeAreaView>
  );
}
