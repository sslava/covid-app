import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import usePhoneCall from '../../shared/usePhoneCall';

import styles from './Resources.styles';

export default function Resources() {
  const callHotline = usePhoneCall('+7(800)2000112');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hotline} onPress={callHotline}>
        <View style={styles.hotlineIcon} />
        <View style={styles.hotlineContent}>
          <Text style={styles.hotlineText}>Единая горячая линия:</Text>
          <Text style={styles.hotlinePhone}>8-800-2000-112</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
