import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './Card.styles';

export default function Card({onPress, icon, title, desc}) {
  return (
    <View style={styles.cardOuter}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={icon} style={styles.cardImage} />
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function CardContainer({children}) {
  return <View style={styles.cards}>{children}</View>;
}
