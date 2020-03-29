import React from 'react';

import {View, ScrollView, SafeAreaView} from 'react-native';

import NavStatusBar from '../shared/NavStatusBar';

import Symptoms from './Symptoms/Symptoms';
import Recommendations from './Recommendations/Recommendations';
import Resources from './Resources/Resources';

import styles from './InfoScreen.styles';

export default function InfoScreen({navigation}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavStatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View slyle={styles.symptons}>
            <Symptoms />
          </View>
          <View slyle={styles.recommendations}>
            <Recommendations />
          </View>
          <View slyle={styles.resources}>
            <Resources />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
