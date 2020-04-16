import React, {useCallback} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import {t} from '../../../common/locale';

import Country from './Country';
import Subheader from '../common/Subheader';
import Sources from '../common/Sources';
import PageLink from '../common/PageLink';
import SearchButton from '../../shared/Search/SearchButton';

import {Search, All} from './Countries.styles';

export default function Countries({countries}) {
  const nav = useNavigation();
  const open = useCallback(() => nav.navigate('Countries', {search: true}), [
    nav,
  ]);

  if (!countries || !countries.length) {
    return null;
  }

  return (
    <View>
      <Subheader title={t('stats.countries.title')} />
      <Search>
        <SearchButton placeholder={t('countries.search')} onPress={open} />
      </Search>
      <View>
        {countries.map((c) => (
          <Country key={c.code} country={c} />
        ))}
      </View>
      <All>
        <PageLink route="Countries">{t('stats.countries.all')}</PageLink>
      </All>
      <Sources date={countries[0].updated} />
    </View>
  );
}
