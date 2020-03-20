import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Platform, Linking} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Phones.styles';

const schema = Platform.select({
  ios: 'telprompt',
  android: 'tel',
});

export default function Phones() {
  const callHotline = useCallback(async () => {
    const url = `${schema}:+7(800)2000112`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    }
  }, []);

  return (
    <TouchableOpacity style={styles.hotline} onPress={callHotline}>
      <View style={styles.hotlineIcon}>
        <Icon name="phone" size={30} style={styles.icon} />
      </View>
      <View style={styles.hotlineContent}>
        <Text style={styles.hotlineText}>Единая горячая линия:</Text>
        <Text style={styles.hotlinePhone}>8-800-2000-112</Text>
      </View>
    </TouchableOpacity>
  );
}
