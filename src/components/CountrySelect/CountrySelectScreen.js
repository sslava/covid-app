import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import {sortCountries, matchCountry, countryName, t} from '../../common/locale';
import {countriesSelector} from '../../app/statsModule';

import SearchBar from '../shared/Search/SearchBar';
import Country from './Country';

import {usePrefences} from '../shared/Preferences';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import {Container, Search} from './CountrySelectScreen.styles';

export default function CountrySelectScreen({navigation}) {
  const [prefs, updatePrefs] = usePrefences();
  const all = useSelector(countriesSelector);

  const sorted = useMemo(() => sortCountries(all), [all]);

  const [countries, query, setQuery] = useDebouncedSearch(sorted, matchCountry);

  const select = useCallback(
    (primary) => {
      updatePrefs({...prefs, primary});
      navigation.goBack();
    },
    [prefs, navigation, updatePrefs],
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
            selected={item.code === prefs.primary}
            onSelect={select}
          />
        )}
        keyExtractor={(item) => item.code}
      />
    </Container>
  );
}
