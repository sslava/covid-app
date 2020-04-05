import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './PageLink.styles';

export default function PageLink({children, route, params, style}) {
  const nav = useNavigation();

  const open = useCallback(() => nav.navigate(route, params), [
    nav,
    params,
    route,
  ]);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.button}
        onPress={open}
        activeOpacity={0.5}>
        <Text style={styles.caption}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
