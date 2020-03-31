import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

import styles from './controls.styles';

export function PrimaryNumber({value, style}) {
  return <Text style={[styles.number, style]}>{formatNumber(value)}</Text>;
}

export function Left({children}) {
  return <View style={styles.left}>{children}</View>;
}

export function Right({children, skipToday}) {
  return (
    <View style={[styles.right, skipToday && styles.skipToday]}>
      {children}
    </View>
  );
}
