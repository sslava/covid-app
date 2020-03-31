import React from 'react';

import {View, ScrollView, SafeAreaView} from 'react-native';

import LargeHeader from '../shared/Header/LargeHeader';
import Symptoms from './Symptoms/Symptoms';
import Recommendations from './Recommendations/Recommendations';
import Resources from './Resources/Resources';

import styles from './InfoScreen.styles';

export default function InfoScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <LargeHeader title="Информация" />
        <View style={styles.symptoms}>
          <Symptoms />
        </View>
        <View style={styles.recommendations}>
          <Recommendations />
        </View>
        <View style={styles.resources}>
          <Resources />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
