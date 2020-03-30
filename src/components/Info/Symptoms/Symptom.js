import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Symptom.styles';

export default function Symptom({symptom}) {
  return (
    <View style={[styles.container, {backgroundColor: symptom.bg}]}>
      <Image source={symptom.image} style={styles.image} />
      <Text style={styles.name}>{symptom.title}</Text>
    </View>
  );
}
