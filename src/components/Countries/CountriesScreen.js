import React, {useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';

import {t} from '../../common/locale';
import {matchCountry} from '../../common/locale';

import SearchBar from '../shared/Search/SearchBar';
import useRefresh from '../shared/useRefresh';
import {useCountrySort} from '../shared/countrySort';

import CountryListItem from '../shared/CountryListItem';
import useSortedSearch from './useSortedSearch';

import {
  fetchStats,
  fetchingStatsSelector,
  countriesSelector,
} from '../../app/statsModule';

import {Container, Top, SortControl} from './CountriesScreen.styles';

const keyCode = (c) => c.code;

export default function CountriesScreen({route}) {
  const dispatch = useDispatch();

  const all = useSelector(countriesSelector);
  const isFetching = useSelector(fetchingStatsSelector);
  const refreshStats = useCallback(() => dispatch(fetchStats()), [dispatch]);
  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const nav = useNavigation();
  const openDetails = useCallback(
    (code, name) => nav.navigate('Country', {code, name}),
    [nav],
  );

  const [sv, sort, changeSort] = useCountrySort(route.params.sort);
  const [countries, query, setQuery] = useSortedSearch(all, matchCountry, sort);

  return (
    <Container>
      <Top>
        <SearchBar
          value={query}
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
