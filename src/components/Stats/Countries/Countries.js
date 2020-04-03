import React, {useCallback} from 'react';
import {t} from 'i18n-js';
import {useNavigation} from '@react-navigation/core';
import {View} from 'react-native';

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
      <Subheader>{t('stats.countries.title')}</Subheader>
      <View style={styles.search}>
        <SearchButton
          placeholder={t('stats.countries.search')}
          onPress={open}
        />
      </View>
      <View style={styles.list}>
        {countries.map((c) => (
          <Country key={c.country_name_en} country={c} />
        ))}
      </View>
      <PageLink route="Countries">{t('stats.countries.all')}</PageLink>
      <Sources source="worldometers.info" date={countries[0].updated} />
    </View>
  );
}
