import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import {matchRegion, t, regionName, sortRegions} from '../../common/locale';
import {makeCountryRegionsSelector} from '../../app/regionsModule';

import SearchBar from '../shared/Search/SearchBar';
import Region from './Region';

import {usePreferredRegion, getRegionId} from '../shared/Preferences';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import {Container, Search} from './RegionSelectScreen.styles';

const keyer = (r) => getRegionId(r);

export default function RegionSelectScreen({navigation}) {
  const [regionId, code, saveRegion] = usePreferredRegion();

  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: all} = useSelector((s) => regionsSelector(s, code));

  const sorted = useMemo(() => sortRegions(all), [all]);
  const [regions, query, setQuery] = useDebouncedSearch(sorted, matchRegion);

  const select = useCallback(
    (id) => {
      saveRegion(id);
      navigation.goBack();
    },
    [navigation, saveRegion],
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
        keyExtractor={keyer}
        renderItem={({item}) => (
          <Region
            id={getRegionId(item)}
            name={regionName(item)}
            selected={getRegionId(item) === regionId}
            onSelect={select}
          />
        )}
      />
    </Container>
  );
}
