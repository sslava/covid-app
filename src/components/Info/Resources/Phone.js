import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import usePhoneCall from '../../shared/usePhoneCall';

import callIcon from './call.png';

import styles from './Resources.styles';

export default function Phone({phone, dialNumber, children}) {
  const call = usePhoneCall(dialNumber);
  return (
    <TouchableOpacity style={styles.button} onPress={call} activeOpacity={0.5}>
      <Text style={styles.buttonTitle}>{children}</Text>
      <View style={styles.buttonSubtitle}>
        <Text style={styles.buttonPhoneText}>{phone}</Text>
        <Image style={styles.buttonPhoneIcon} source={callIcon} />
      </View>
    </TouchableOpacity>
  );
}
