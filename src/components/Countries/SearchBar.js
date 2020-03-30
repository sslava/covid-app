import React from 'react';
import {TextInput, View, Image} from 'react-native';

import searchIcon from '../../assets/icons/search_white.png';

import styles from './SearchBar.styles';

export default function SearchBar({onChange, value}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Найти"
        value={value}
        onChangeText={onChange}
      />
      <View style={styles.search}>
        <Image source={searchIcon} style={styles.icon} />
      </View>
    </View>
  );
}
