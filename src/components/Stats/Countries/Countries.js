import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';

import {t} from '../../../common/locale';

import {
  countriesSelector,
  sortTotal,
  sortActive,
  sortDeaths,
} from '../../../app/statsModule';

import Subheader from '../common/Subheader';
import Sources from '../common/Sources';
import SearchButton from '../../shared/Search/SearchButton';
import CountryListItem from '../../shared/CountryListItem';
import {ListIcon} from '../../common/buttonIcons';

import useSortTabs from '../../shared/useSortTabs';

import {Search, All, SortControl} from './Countries.styles';
import {Button} from '../../common/Button';

function sortedTop(countries, sort, topX = 10) {
  if (!countries || !countries.length) {
    return [];
  }
  const sortFns = [sortTotal, sortActive, sortDeaths];
  return sortFns[sort](countries).slice(0, topX);
}

export default function TopCountries() {
  const [sv, sort, changeSort] = useSortTabs();
  const all = useSelector(countriesSelector);
  const countries = useMemo(() => sortedTop(all, sort), [all, sort]);

  const nav = useNavigation();

  const openList = useCallback(() => nav.navigate('Countries', {sort: sort}), [
    nav,
    sort,
  ]);

  const openSearch = useCallback(
    () => nav.navigate('Countries', {sort: sort, search: true}),
    [nav, sort],
  );

  const openDetails = useCallback(
    (code, name) => nav.navigate('Country', {code, name}),
    [nav],
  );

  if (!countries.length) {
    return null;
  }

  return (
    <View>
      <Subheader title={t('stats.countries.title')} />
      <Search>
        <SearchButton
          placeholder={t('countries.search')}
          onPress={openSearch}
        />
        <SortControl selectedIndex={sort} onChange={changeSort} values={sv} />
      </Search>
      <View>
        {countries.map((c, index) => (
          <CountryListItem
            key={c.code}
            index={1 + index}
            sort={sort}
            country={c}
            onDetails={openDetails}
          />
        ))}
      </View>
      <All>
        <Button onPress={openList} icon={<ListIcon />}>
          {t('stats.countries.all')}
        </Button>
      </All>
      <Sources date={countries[0].updated} />
    </View>
  );
}
