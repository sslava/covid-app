import React from 'react';

import {View, Text} from 'react-native';

import styles from './LargeHeader.styles';

export default function LargeHeader({title, style}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
