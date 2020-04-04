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
    <TouchableOpacity
      style={styles.header}
      activeOpacity={activeOpacity}
      {...rest}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.children}>{children}</View>
    </TouchableOpacity>
  );
}
