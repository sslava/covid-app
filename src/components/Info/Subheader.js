import React from 'react';
import {View, Text} from 'react-native';

import styles from './Subheader.styles';

export default function Subheader({children}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
