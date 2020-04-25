import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import {sortCountries, matchCountry, countryName, t} from '../../common/locale';
import {countriesSelector} from '../../app/statsModule';

import SearchBar from '../shared/Search/SearchBar';
import Country from './Country';

import {usePreferredCountry} from '../shared/Preferences';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import {Container, Search} from './CountrySelectScreen.styles';

export default function CountrySelectScreen({navigation}) {
  const [primary, updateCountry] = usePreferredCountry();
  const all = useSelector(countriesSelector);

  const sorted = useMemo(() => sortCountries(all), [all]);

  const [countries, query, setQuery] = useDebouncedSearch(sorted, matchCountry);

  const select = useCallback(
    (id) => {
      updateCountry(id);
      navigation.goBack();
    },
    [navigation, updateCountry],
  );

  return (
    <Container>
      <Search>
        <SearchBar
          placeholder={t('countries.search')}
          value={query}
          onChange={setQuery}
        />
      </Search>
      <FlatList
        data={countries}
        renderItem={({item}) => (
          <Country
            countryName={countryName(item)}
            code={item.code}
            selected={item.code === primary}
            onSelect={select}
          />
        )}
        keyExtractor={(item) => item.code}
      />
    </Container>
  );
}
