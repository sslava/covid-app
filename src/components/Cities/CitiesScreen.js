import React from 'react';
import {t} from '../../common/locale';
import {FlatList, RefreshControl} from 'react-native';

import City from './City';
import SearchBar from '../shared/Search/SearchBar';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';

import {Container, Search} from './CitiesScreen.styles';

const filterCity = (q, c) => c.name.toLowerCase().indexOf(q) !== -1;

export default function CitiesScreen() {
  const {
    state: {data, isFetching},
    refreshStats,
  } = useStatsContext();

  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const [cities, query, setQuery] = useDebouncedSearch(data.cities, filterCity);

  return (
    <Container>
      <Search>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t('cities.search')}
        />
      </Search>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        data={cities}
        renderItem={({item}) => <City city={item} />}
        keyExtractor={(item) => item.name}
      />
    </Container>
  );
}
