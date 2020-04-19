import React from 'react';
import {t} from '../../common/locale';
import {FlatList, RefreshControl} from 'react-native';

import City from './City';
import SearchBar from '../shared/Search/SearchBar';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';
import useRefresh from '../shared/useRefresh';

import {Container, Search} from './CitiesScreen.styles';

const filterCity = (q, c) => c.name.toLowerCase().indexOf(q) !== -1;

const refreshCities = () => {};
const isFetching = false;
const allcities = [];

export default function CitiesScreen() {
  const [refresh, refreshing] = useRefresh(refreshCities, isFetching);
  const [cities, query, setQuery] = useDebouncedSearch(allcities, filterCity);

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
