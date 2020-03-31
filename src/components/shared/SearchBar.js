import React from 'react';
import {TextInput, View, Image} from 'react-native';

import searchIcon from '../../assets/icons/search_white.png';

import styles from './SearchBar.styles';

export default function SearchBar({onChange, value, placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8B8C9C"
        value={value ? value : ''}
        clearButtonMode="always"
        onChangeText={onChange}
      />
      <Image style={styles.icon} source={searchIcon} />
    </View>
  );
}
