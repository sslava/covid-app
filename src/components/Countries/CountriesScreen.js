import React from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {t} from '../../common/locale';

import Country from './Country';
import SearchBar from '../shared/Search/SearchBar';

import {matchCountry} from '../../common/locale';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';

import {Container, Search} from './CountriesScreen.styles';

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
    <Container>
      <Search>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t('countries.search')}
        />
      </Search>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        data={countries}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item) => item.code}
      />
    </Container>
  );
}
