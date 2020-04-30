import React, {useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {withIndex} from '../../common/utils';
import {t} from '../../common/locale';
import {matchCountry} from '../../common/locale';
import useRefresh from '../common/useRefresh';

import SearchBar from '../shared/Search/SearchBar';
import {sortActive, sortTotal, sortDeaths} from '../../app/statsModule';

import CountryListItem from '../shared/CountryListItem';
import useSortedSearch from '../shared/Search/useSortedSearch';
import useSortTabs from '../shared/useSortTabs';

import {
  fetchStats,
  fetchingStatsSelector,
  countriesSelector,
} from '../../app/statsModule';

import {Container, Top, SortControl} from './CountriesScreen.styles';

const sortFns = [
  withIndex(sortTotal),
  withIndex(sortActive),
  withIndex(sortDeaths),
];

const keyCode = (c) => c.code;

export default function CountriesScreen({route, navigation}) {
  const dispatch = useDispatch();

  const all = useSelector(countriesSelector);
  const isFetching = useSelector(fetchingStatsSelector);
  const refreshStats = useCallback(() => dispatch(fetchStats()), [dispatch]);
  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const openDetails = useCallback(
    (code, name) => navigation.navigate('Country', {code, name}),
    [navigation],
  );

  const [sv, sort, changeSort] = useSortTabs(route.params.sort);
  const [countries, query, setQuery] = useSortedSearch(
    all,
    matchCountry,
    sortFns,
    sort,
  );

  return (
    <Container>
      <Top>
        <SearchBar
          value={query}
          focused={!!route.params.search}
          onChange={setQuery}
          placeholder={t('countries.search')}
        />
        <SortControl selectedIndex={sort} onChange={changeSort} values={sv} />
      </Top>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        data={countries}
        renderItem={({item}) => (
          <CountryListItem
            sort={sort}
            country={item}
            index={item.index}
            onDetails={openDetails}
          />
        )}
        keyExtractor={keyCode}
      />
    </Container>
  );
}
