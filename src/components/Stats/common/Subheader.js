import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Subheader.styles';

export default function Subheader({icon, children}) {
  return (
    <View style={styles.header}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
