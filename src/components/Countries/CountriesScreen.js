import React, {useState, useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {t} from '../../common/locale';

import Country from './Country';
import SearchBar from '../shared/Search/SearchBar';

import {matchCountry} from '../../common/locale';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';

import {Container, Top, SortControl} from './CountriesScreen.styles';

function sortActive(arr) {
  return [...arr].sort((a, b) => b.active - a.active);
}

function sortDeaths(arr) {
  return [...arr].sort((a, b) => b.deaths - a.deaths);
}

const sortFns = [(a) => a, sortActive, sortDeaths];

export default function CountriesScreen() {
  const {
    state: {data, isFetching},
    refreshStats,
  } = useStatsContext();

  const [sort, setSort] = useState(0);
  const changeSort = useCallback(
    (e) => setSort(e.nativeEvent.selectedSegmentIndex),
    [],
  );

  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const [countries, query, setQuery] = useDebouncedSearch(
    data.countries,
    matchCountry,
    sortFns[sort],
  );

  return (
    <Container>
      <Top>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t('countries.search')}
        />
        <SortControl
          selectedIndex={sort}
          onChange={changeSort}
          values={[
            t('countries.sort.total'),
            t('countries.sort.active'),
            t('countries.sort.deaths'),
          ]}
        />
      </Top>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        data={countries}
        renderItem={({item}) => <Country sort={sort} country={item} />}
        keyExtractor={(item) => item.code}
      />
    </Container>
  );
}
