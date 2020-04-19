import React, {useState, useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {t} from '../../common/locale';

import Country from './Country';
import SearchBar from '../shared/Search/SearchBar';

import {matchCountry} from '../../common/locale';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';

import {Container, Top, SortControl} from './CountriesScreen.styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchStats,
  fetchingStatsSelector,
  countriesByTotalSelector,
} from '../../app/statsModule';

function sortActive(arr) {
  return [...arr].sort((a, b) => b.active - a.active);
}

function sortDeaths(arr) {
  return [...arr].sort((a, b) => b.deaths - a.deaths);
}

const sortFns = [(a) => a, sortActive, sortDeaths];

export default function CountriesScreen() {
  const dispatch = useDispatch();
  const sortedCountries = useSelector(countriesByTotalSelector);

  const isFetching = useSelector(fetchingStatsSelector);
  const refreshStats = useCallback(() => dispatch(fetchStats()), [dispatch]);

  const [sort, setSort] = useState(0);
  const changeSort = useCallback(
    (e) => setSort(e.nativeEvent.selectedSegmentIndex),
    [],
  );

  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const [countries, query, setQuery] = useDebouncedSearch(
    sortedCountries,
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
