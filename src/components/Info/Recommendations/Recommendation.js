import React from 'react';
import {View, Text, Image} from 'react-native';

import icon from '../../../assets/icons/prevent_black.png';

import styles from './Recommendation.styles';

export default function Recommendation({recommendation}) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{recommendation.title}</Text>
        <Text style={styles.desc}>{recommendation.desc}</Text>
      </View>
    </View>
  );
}
