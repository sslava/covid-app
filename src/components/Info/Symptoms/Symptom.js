import React from 'react';
import {View, Text} from 'react-native';

import styles from './Symptom.styles';

export default function Symptom({symptom, icon}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{symptom.title}</Text>
    </View>
  );
}
