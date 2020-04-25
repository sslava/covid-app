import React, {useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {FlatList} from 'react-native';

import {sortCountries, matchCountry, countryName, t} from '../../common/locale';
import {countriesSelector} from '../../app/statsModule';

import SearchBar from '../shared/Search/SearchBar';
import Country from './Country';

import {
  preferredCountrySelector,
  updatePrimaryCountry,
} from '../../app/preferencesModule';

import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import {Container, Search} from './CountrySelectScreen.styles';

export default function CountrySelectScreen({navigation}) {
  const dispatch = useDispatch();
  const primary = useSelector(preferredCountrySelector);
  const all = useSelector(countriesSelector);

  const sorted = useMemo(() => sortCountries(all), [all]);

  const [countries, query, setQuery] = useDebouncedSearch(sorted, matchCountry);

  const select = useCallback(
    (id) => {
      dispatch(updatePrimaryCountry(id));
      navigation.goBack();
    },
    [navigation, dispatch],
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
