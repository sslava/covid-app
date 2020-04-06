import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {t} from '../../common/locale';
import useBrowserLink from '../shared/useBrowserLink';
import {usePrefences} from '../shared/PreferencesContext';

import styles from './VerbaLink.styles';

export default function VerbaLink() {
  const [prefs] = usePrefences();
  const pressLink = useBrowserLink('http://verbaclinic.ru/');

  if (prefs.primary !== 'RU') {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.link}
        activeOpacity={0.5}
        onPress={pressLink}>
        <Text style={styles.text}>
          {t('info.verba.text')}
          <Text style={styles.link}>{t('info.verba.link')}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
