import React from 'react';
import {View, Text} from 'react-native';

import Country from './Country';

import styles from './Countries.styles';

export default function Countries({countries}) {
  if (!countries || !countries.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>По странам</Text>
      {countries.map(c => (
        <Country key={c.country_name_en} country={c} />
      ))}
    </View>
  );
}
