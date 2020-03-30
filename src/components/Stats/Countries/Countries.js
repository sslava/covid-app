import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Country from './Country';
import Sources from '../Sources';

import styles from './Countries.styles';

export default function Countries({countries}) {
  const nav = useNavigation();
  const openCountries = useCallback(() => nav.navigate('Countries'), [nav]);

  if (!countries || !countries.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>В других странах</Text>
      {countries.map(c => (
        <Country key={c.country_name_en} country={c} />
      ))}
      <View style={styles.action}>
        <TouchableOpacity style={styles.button} onPress={openCountries}>
          <Text style={styles.buttonCaption}>Все страны</Text>
        </TouchableOpacity>
      </View>
      <Sources source="worldometers.info" date={countries[0].updated} />
    </View>
  );
}
