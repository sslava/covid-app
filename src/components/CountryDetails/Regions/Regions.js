import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t, countryName} from '../../../common/locale';

import {
  makeCountryRegionsSelector,
  sortTotal,
  sortActive,
  sortDeaths,
} from '../../../app/regionsModule';
import {getRegionId} from '../../../app/preferencesModule';

import SearchButton from '../../shared/Search/SearchButton';
import {ListIcon} from '../../common/buttonIcons';
import {Button} from '../../common/Button';

import useSortTabs from '../../shared/useSortTabs';

import Region from './Region';
import {Content, Hdr, Search, All, SortControl} from './Regions.styles';

function sortedTop(cities, sort, topX = 10) {
  if (!cities || !cities.length) {
    return [];
  }
  const sortFns = [sortTotal, sortActive, sortDeaths];
  return sortFns[sort](cities).slice(0, topX);
}

export default function TopRegions({code, country}) {
  const [sv, sort, changeSort] = useSortTabs();

  const regionsSelector = useMemo(makeCountryRegionsSelector, []);
  const {data: all} = useSelector((s) => regionsSelector(s, code));
  const cities = useMemo(() => sortedTop(all, sort), [all, sort]);

  const nav = useNavigation();

  const openList = useCallback(
    () =>
      nav.navigate('Regions', {
        code: code,
        sort: sort,
        name: countryName(country),
      }),
    [nav, code, country, sort],
  );

  const openSearch = useCallback(
    () =>
      nav.navigate('Regions', {
        code: code,
        sort: sort,
        name: countryName(country),
        search: true,
      }),
    [nav, code, country, sort],
  );

  if (!cities.length) {
    return null;
  }

  return (
    <Content>
      <Hdr>{t('country.regions.title')}</Hdr>
      <Search>
        <SearchButton placeholder={t('states.search')} onPress={openSearch} />
        <SortControl selectedIndex={sort} onChange={changeSort} values={sv} />
      </Search>
      <View>
        {cities.map((r, index) => (
          <Region
            key={getRegionId(r)}
            sort={sort}
            index={1 + index}
            region={r}
          />
        ))}
      </View>
      <All>
        <Button onPress={openList} icon={<ListIcon />}>
          {t('country.regions.all')}
        </Button>
      </All>
    </Content>
  );
}
