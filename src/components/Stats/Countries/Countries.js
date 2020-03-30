import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import openIcon from '../../../assets/icons/open_grey.png';

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
        <TouchableOpacity
          style={styles.all}
          onPress={openCountries}
          activeOpacity={0.3}>
          <Text style={styles.allCaption}>Все страны</Text>
          <Image source={openIcon} style={styles.allIcon} />
        </TouchableOpacity>
      </View>
      <Sources source="worldometers.info" date={countries[0].updated} />
    </View>
  );
}
