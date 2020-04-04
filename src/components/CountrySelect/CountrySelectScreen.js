import React, {useCallback, useMemo} from 'react';
import {t} from 'i18n-js';
import {View, SafeAreaView, FlatList} from 'react-native';

import {sortCountries, countryName} from '../../common/locale';

import SearchBar from '../shared/Search/SearchBar';
import Country from './Country';

import {usePrefences} from '../shared/PreferencesContext';
import {useStatsContext} from '../shared/StatsDataContext';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import styles from './CountrySelectScreen.styles';

const filterCountry = (q, c) =>
  c.country_name.toLowerCase().indexOf(q) !== -1 ||
  c.country_name_en.toLowerCase().indexOf(q) !== -1;

export default function CountrySelectScreen({navigation}) {
  const [prefs, updatePrefs] = usePrefences();

  const {
    state: {data},
  } = useStatsContext();

  const sorted = useMemo(() => sortCountries(data.countries), [data.countries]);

  const [countries, query, setQuery] = useDebouncedSearch(
    sorted,
    filterCountry,
  );

  const select = useCallback(
    (primary) => {
      updatePrefs({...prefs, primary});
      navigation.goBack();
    },
    [prefs, navigation, updatePrefs],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar
          placeholder={t('countries.search')}
          value={query}
          onChange={setQuery}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={countries}
        renderItem={({item}) => (
          <Country
            countryName={countryName(item)}
            code={item.code}
            id={item.country_name_en}
            onSelect={select}
            selected={item.country_name_en === prefs.primary}
          />
        )}
        keyExtractor={(item) => item.country_name_en}
      />
    </SafeAreaView>
  );
}
