import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import usePhoneCall from '../../shared/usePhoneCall';
import useBrowserLink from '../../shared/useBrowserLink';
import Subheader from '../Subheader';

import callIcon from './call.png';
import linkIcon from './link.png';

import styles from './Resources.styles';

function Phone({phone, dialNumber, children}) {
  const call = usePhoneCall(dialNumber);

  return (
    <TouchableOpacity style={styles.button} onPress={call} activeOpacity={0.6}>
      <Text style={styles.buttonTitle}>{children}</Text>
      <View style={styles.buttonSubtitle}>
        <Text style={styles.buttonPhoneText}>{phone}</Text>
        <Image style={styles.buttonPhoneIcon} source={callIcon} />
      </View>
    </TouchableOpacity>
  );
}

function Link({url, text, children}) {
  const open = useBrowserLink(url);
  return (
    <TouchableOpacity
      style={[styles.button, styles.link]}
      onPress={open}
      activeOpacity={0.6}>
      <Text style={styles.linkTitle}>{children}</Text>
      <View style={styles.buttonSubtitle}>
        <Text style={styles.linkUrlText}>{text}</Text>
        <Image style={styles.linkUrlIcon} source={linkIcon} />
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
      <Subheader>Полезные ссылки</Subheader>
      <View style={styles.list}>
        <Link
          url="https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses"
          text="Официальный сайт ВОЗ">
          Вопросы и ответы о коронавирусной инфекции COVID-19
        </Link>
      </View>
    </View>
  );
}
