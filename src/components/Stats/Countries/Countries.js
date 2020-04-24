import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/core';

import {t} from '../../../common/locale';
import {topCountriesSelector} from '../../../app/statsModule';

import Subheader from '../common/Subheader';
import Sources from '../common/Sources';
import PageLink from '../common/PageLink';
import SearchButton from '../../shared/Search/SearchButton';
import {useCountrySort} from '../../shared/countrySort';

import Country from './Country';

import {Search, All, SortControl} from './Countries.styles';

export default function Countries() {
  const countries = useSelector(topCountriesSelector);

  const nav = useNavigation();
  const openList = useCallback(() => nav.navigate('Countries'), [nav]);

  const openDetails = useCallback(
    (code, name) => nav.navigate('Country', {code, name}),
    [nav],
  );

  const [sv, sort, changeSort] = useCountrySort();

  if (!countries || !countries.length) {
    return null;
  }

  return (
    <View>
      <Subheader title={t('stats.countries.title')} />
      <Search>
        <SearchButton placeholder={t('countries.search')} onPress={openList} />
        <SortControl selectedIndex={sort} onChange={changeSort} values={sv} />
      </Search>
      <View>
        {countries.map((c, index) => (
          <Country
            key={c.code}
            country={c}
            onDetails={openDetails}
            index={1 + index}
          />
        ))}
      </View>
      <All>
        <PageLink route="Countries">{t('stats.countries.all')}</PageLink>
      </All>
      <Sources date={countries[0].updated} />
    </View>
  );
}
