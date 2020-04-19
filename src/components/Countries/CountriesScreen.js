import React, {useState, useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {t} from '../../common/locale';

import Country from './Country';
import SearchBar from '../shared/Search/SearchBar';

import {matchCountry} from '../../common/locale';

import useSortedSearch from './useSortedSearch';
import useRefresh from '../shared/useRefresh';

import {Container, Top, SortControl} from './CountriesScreen.styles';
import {
  fetchStats,
  fetchingStatsSelector,
  countriesSelector,
} from '../../app/statsModule';

export default function CountriesScreen() {
  const dispatch = useDispatch();
  const all = useSelector(countriesSelector);

  const isFetching = useSelector(fetchingStatsSelector);
  const refreshStats = useCallback(() => dispatch(fetchStats()), [dispatch]);
  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const [sort, setSort] = useState(0);
  const changeSort = useCallback(
    (e) => setSort(e.nativeEvent.selectedSegmentIndex),
    [],
  );

  const [countries, query, setQuery] = useSortedSearch(all, matchCountry, sort);

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
