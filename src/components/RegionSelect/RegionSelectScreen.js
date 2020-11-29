import React, {useCallback, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {FlatList} from 'react-native';

import {matchRegion, t, regionName, sortRegions} from '../../common/locale';
import {makeCountryRegionsSelector} from '../../app/regionsModule';

import {
  makePreferredRegionSelector,
  getRegionId,
  updatePrimaryRegion,
} from '../../app/preferencesModule';

import SearchBar from '../shared/Search/SearchBar';
import useDebouncedSearch from '../shared/Search/useDebounceSearch';

import Region from './Region';

import {Container, Search} from './RegionSelectScreen.styles';

const keyer = (r) => getRegionId(r);

export default function RegionSelectScreen({navigation, route}) {
  const dispatch = useDispatch();
  const code = route.params.code;

  const regionIdSelecor = useMemo(makePreferredRegionSelector, []);
  const regionId = useSelector((s) => regionIdSelecor(s, code));

  const regionsSelector = useMemo(makeCountryRegionsSelector, []);
  const {data: all} = useSelector((s) => regionsSelector(s, code));

  const sorted = useMemo(() => sortRegions(all), [all]);
  const [regions, query, setQuery] = useDebouncedSearch(sorted, matchRegion);

  const select = useCallback(
    (id) => {
      dispatch(updatePrimaryRegion(code, id));
      navigation.goBack();
    },
    [navigation, dispatch, code],
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
