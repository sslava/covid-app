import React from 'react';

import {View} from 'react-native';

import Country from './Country';
import Subheader from '../common/Subheader';
import Sources from '../common/Sources';
import PageLink from '../common/PageLink';

import styles from './Countries.styles';

export default function Countries({countries}) {
  if (!countries || !countries.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Subheader>В других странах</Subheader>
      <View style={styles.list}>
        {countries.map((c) => (
          <Country key={c.country_name_en} country={c} />
        ))}
      </View>
      <PageLink route="Countries">Все страны</PageLink>
      <Sources source="worldometers.info" date={countries[0].updated} />
    </View>
  );
}
