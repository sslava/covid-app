import React from 'react';
import {View} from 'react-native';

import Country from './Country';

import styles from './Countries.styles';

export default function Countries({countries}) {
  if (!countries || !countries.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      {countries.map(c => (
        <Country key={c.country_name_en} country={c} />
      ))}
    </View>
  );
}
