import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import {matchRegion, t, regionName, sortRegions} from '../../common/locale';
import {makeCountryRegionsSelector} from '../../app/regionsModule';

import SearchBar from '../shared/Search/SearchBar';
import Region from './Region';

import {usePrefences} from '../shared/Preferences';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import {Container, Search} from './RegionSelectScreen.styles';

export default function RegionSelectScreen({navigation}) {
  const [prefs] = usePrefences();

  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: all} = useSelector((s) => regionsSelector(s, prefs.primary));

  const sorted = useMemo(() => sortRegions(all), [all]);

  const [regions, query, setQuery] = useDebouncedSearch(sorted, matchRegion);

  const select = useCallback(
    (primary) => {
      // updatePrefs({...prefs, primary});
      navigation.goBack();
    },
    [navigation],
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
        data={regions}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Region
            id={item.id}
            name={regionName(item)}
            selected={item.id === '1'}
            onSelect={select}
          />
        )}
      />
    </Container>
  );
}
