import React from 'react';
import {View} from 'react-native';

import styles from './StatsBar.styles';

export default function StatsBar({items, height = 20}) {
  return (
    <View style={styles.container}>
      {items.map(({color, fraction}) => (
        <View
          key={color}
          style={[
            styles.bar,
            {
              backgroundColor: color,
              width: `${(fraction * 100).toFixed(3)}%`,
              height,
            },
          ]}
        />
      ))}
    </View>
  );
}
