import React, {useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {FlatList} from 'react-native';

import {matchRegion, t, regionName, sortRegions} from '../../common/locale';
import {makeCountryRegionsSelector} from '../../app/regionsModule';

import {
  preferredCountrySelector,
  preferredRegionSelector,
  getRegionId,
  updatePrimaryRegion,
} from '../../app/preferencesModule';

import SearchBar from '../shared/Search/SearchBar';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import Region from './Region';

import {Container, Search} from './RegionSelectScreen.styles';

const keyer = (r) => getRegionId(r);

export default function RegionSelectScreen({navigation}) {
  const dispatch = useDispatch();
  const code = useSelector(preferredCountrySelector);
  const regionId = useSelector(preferredRegionSelector);

  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: all} = useSelector((s) => regionsSelector(s, code));

  const sorted = useMemo(() => sortRegions(all), [all]);
  const [regions, query, setQuery] = useDebouncedSearch(sorted, matchRegion);

  const select = useCallback(
    (id) => {
      dispatch(updatePrimaryRegion(id));
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
