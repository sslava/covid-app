import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import callIcon from './call.png';
import usePhoneCall from '../../shared/usePhoneCall';
import Subheader from '../Subheader';

import styles from './Resources.styles';

function Phone({phone, dialNumber, children}) {
  const call = usePhoneCall(dialNumber);

  return (
    <TouchableOpacity style={styles.button} onPress={call} activeOpacity={0.6}>
      <Text style={styles.buttonTitle}>{children}</Text>
      <View style={styles.buttonPhone}>
        <Text style={styles.buttonPhoneText}>{phone}</Text>
        <Image style={styles.buttonPhoneIcon} source={callIcon} />
      </View>
    </TouchableOpacity>
  );
}

export default function Resources() {
  return (
    <View style={styles.container}>
      <Subheader>Полезные контакты</Subheader>
      <View style={styles.list}>
        <Phone dialNumber="+7(800)2000112" phone="8 800 2000 112">
          Горячая линия Минздрава России
        </Phone>
        <Phone dialNumber="112" phone="112">
          Скорая помощь
        </Phone>
      </View>
    </View>
  );
}
