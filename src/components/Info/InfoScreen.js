import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import HeaderScrollView from '../shared/HeaderScrollView';

import Phones from './Phones/Phones';

import styles from './InfoScreen.styles';

export default function StatsScreen({navigation}) {
  return (
    <HeaderScrollView title="Информация">
      <View style={styles.stats} />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.orange]}
          onPress={() => navigation.push('Faq')}>
          <Text style={styles.buttonText}>Как передается</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.green]}>
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.indigo]}>
          <Text style={styles.buttonText}>Профилактика</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.purple]}>
          <Text style={styles.buttonText}>Симптомы</Text>
        </TouchableOpacity>
      </View>
      <Phones />
    </HeaderScrollView>
  );
}
