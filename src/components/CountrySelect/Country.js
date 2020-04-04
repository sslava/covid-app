import React, {useCallback, memo} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';

import checkboxImage from '../../assets/icons/checkmark.png';
import countryIcons from '../shared/countryIcons';

import styles from './Country.styles';

function Country({countryName, id, code, selected, onSelect}) {
  const press = useCallback(() => onSelect(id), [id, onSelect]);
  const image = countryIcons[code];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={press}
      activeOpacity={0.5}>
      <View style={styles.left}>
        <Image style={styles.flag} source={image} />
        <Text style={styles.title}>{countryName}</Text>
      </View>
      {selected && <Image style={styles.selected} source={checkboxImage} />}
    </TouchableOpacity>
  );
}

export default memo(Country);
