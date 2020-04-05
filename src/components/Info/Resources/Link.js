import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import useBrowserLink from '../../shared/useBrowserLink';

import linkIcon from './link.png';

import styles from './Resources.styles';

export default function Link({url, text, children}) {
  const open = useBrowserLink(url);
  return (
    <TouchableOpacity
      style={[styles.button, styles.link]}
      onPress={open}
      activeOpacity={0.5}>
      <Text style={styles.linkTitle}>{children}</Text>
      <View style={styles.buttonSubtitle}>
        <Text style={styles.linkUrlText}>{text}</Text>
        <Image style={styles.linkUrlIcon} source={linkIcon} />
      </View>
    </TouchableOpacity>
  );
}
