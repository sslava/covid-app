import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import callIcon from '../../../assets/icons/call_black.png';
import usePhoneCall from '../../shared/usePhoneCall';
import Subheader from '../Subheader';

import styles from './Resources.styles';

export default function Resources() {
  const callHotline = usePhoneCall('+7(800)2000112');

  return (
    <View style={styles.container}>
      <Subheader>Полезные ресурсы</Subheader>

      <View style={styles.list}>
        <TouchableOpacity
          style={styles.hotline}
          onPress={callHotline}
          activeOpacity={0.6}>
          <Image style={styles.hotlineIcon} source={callIcon} />
          <View style={styles.hotlineContent}>
            <Text style={styles.hotlineText}>Единая горячая линия</Text>
            <Text style={styles.hotlinePhone}>8-800-2000-112</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
