import React from 'react';
import {View} from 'react-native';

import styles from './StatsBar.styles';

export default function StatsBar({items}) {
  return (
    <View style={styles.container}>
      {items.map(({color, width}) => (
        <View
          key={color}
          style={[styles.item, {width, backgroundColor: color}]}
        />
      ))}
    </View>
  );
}
