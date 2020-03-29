import React from 'react';
import {View, Text} from 'react-native';

import styles from './Symptom.styles';

export default function Symptom({text, icon}) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
}
