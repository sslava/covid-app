import React from 'react';
import {View, Text} from 'react-native';

import {Left, Right, PrimaryNumber} from './controls';
import SecondaryNumber from '../SecondaryNumber';

import styles from './LegendItem.styles';

export default function LegendItem({color, title, number, today, numberStyle}) {
  return (
    <View style={styles.container}>
      <Left style={styles.left}>
        <View style={[styles.color, {backgroundColor: color}]} />
        <Text style={styles.title}>{title}</Text>
      </Left>
      <Right style={styles.right}>
        <PrimaryNumber value={number} style={numberStyle} />
        <SecondaryNumber num={today} style={styles.today} />
      </Right>
    </View>
  );
}
