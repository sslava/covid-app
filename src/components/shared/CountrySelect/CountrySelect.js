import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import {
  sortCountries,
  matchCountry,
  countryName,
  t,
} from '../../../common/locale';
import {countriesSelector} from '../../../app/statsModule';

import SearchBar from '../Search/SearchBar';
import Country from './Country';

import useDebouncedSearch from '../Search/useDebounceSearch';

import {Container, Search} from './CountrySelect.styles';

export default function CountrySelect({selected, onSelect, world = false}) {
  const all = useSelector(countriesSelector);
  const sorted = useMemo(() => {
    let s = sortCountries(all);
    if (!world) {
      return s;
    }
    return [{code: null, country_name_en: t('country.all.world')}, ...s];
  }, [all, world]);
  const [countries, query, setQuery] = useDebouncedSearch(sorted, matchCountry);

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
            selected={item.code === selected}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item) => item.code}
      />
    </Container>
  );
}
