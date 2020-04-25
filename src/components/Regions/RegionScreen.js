import React, {useMemo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, RefreshControl} from 'react-native';

import {
  makeCountryRegionsSelector,
  fetchCountryRegions,
  sortTotal,
  sortActive,
  sortDeaths,
} from '../../app/regionsModule';

import {t, matchRegion} from '../../common/locale';
import {withIndex} from '../../common/utils';
import {
  preferredCountrySelector,
  getRegionId,
} from '../../app/preferencesModule';

import Region from './Region';
import SearchBar from '../shared/Search/SearchBar';
import useSortTabs from '../shared/useSortTabs';
import useSortedSearch from '../shared/Search/useSortedSearch';

import useRefresh from '../common/useRefresh';

import {Container, Top, SortControl} from './RegionScreen.styles';

const sortFns = [
  withIndex(sortTotal),
  withIndex(sortActive),
  withIndex(sortDeaths),
];

export default function RegionScreen() {
  const dispatch = useDispatch();
  const countryCode = useSelector(preferredCountrySelector);

  const regionsSelector = useMemo(makeCountryRegionsSelector);
  const {data: all, isFetching} = useSelector((s) =>
    regionsSelector(s, countryCode),
  );

  const refreshRegions = useCallback(
    () => dispatch(fetchCountryRegions(countryCode)),
    [dispatch, countryCode],
  );

  const [refresh, refreshing] = useRefresh(refreshRegions, isFetching);

  const [sv, sort, changeSort] = useSortTabs();
  const [states, query, setQuery] = useSortedSearch(
    all,
    matchRegion,
    sortFns,
    sort,
  );

  return (
    <Container>
      <Top>
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t('states.search')}
        />
        <SortControl selectedIndex={sort} onChange={changeSort} values={sv} />
      </Top>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
        data={states}
        renderItem={({item}) => (
          <Region sort={sort} index={item.index} region={item} />
        )}
        keyExtractor={getRegionId}
      />
    </Container>
  );
}
