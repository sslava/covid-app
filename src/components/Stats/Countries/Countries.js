import React, {useCallback} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/core';

import {t} from '../../../common/locale';

import Country from './Country';
import Subheader from '../common/Subheader';
import Sources from '../common/Sources';
import PageLink from '../common/PageLink';
import SearchButton from '../../shared/Search/SearchButton';

import styles from './Countries.styles';

export default function Countries({countries}) {
  const nav = useNavigation();
  const open = useCallback(() => nav.navigate('Countries', {search: true}), [
    nav,
  ]);

  if (!countries || !countries.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Subheader title={t('stats.countries.title')} />
      <View style={styles.search}>
        <SearchButton placeholder={t('countries.search')} onPress={open} />
      </View>
      <View style={styles.list}>
        {countries.map((c) => (
          <Country key={c.code} country={c} />
        ))}
      </View>
      <PageLink route="Countries">{t('stats.countries.all')}</PageLink>
      <Sources source="worldometers.info" date={countries[0].updated} />
    </View>
  );
}
