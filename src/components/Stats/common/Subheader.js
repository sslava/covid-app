import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './Subheader.styles';

export default function Subheader({
  icon,
  title,
  children,
  activeOpacity = 1,
  ...rest
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        activeOpacity={activeOpacity}
        {...rest}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        <View style={styles.children}>{children}</View>
      </TouchableOpacity>
    </View>
  );
}
