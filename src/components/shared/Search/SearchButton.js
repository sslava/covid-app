import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import searchIcon from '../../../assets/icons/search.png';

import styles from './SearchBar.styles';

export default function SearchButton({placeholder, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.5}>
      <View style={styles.input}>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </View>
      <Image style={styles.icon} source={searchIcon} />
    </TouchableOpacity>
  );
}
