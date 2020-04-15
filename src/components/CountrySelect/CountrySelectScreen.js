import React, {useCallback, useMemo} from 'react';
import {FlatList} from 'react-native';

import {sortCountries, matchCountry, countryName, t} from '../../common/locale';

import SearchBar from '../shared/Search/SearchBar';
import Country from './Country';

import {usePrefences} from '../shared/PreferencesContext';
import {useStatsContext} from '../shared/StatsDataContext';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import {Container, Search} from './CountrySelectScreen.styles';

export default function CountrySelectScreen({navigation}) {
  const [prefs, updatePrefs] = usePrefences();

  const {
    state: {data},
  } = useStatsContext();

  const sorted = useMemo(() => sortCountries(data.countries), [data.countries]);

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
