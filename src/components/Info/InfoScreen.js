import React, {useRef} from 'react';
import {t} from 'i18n-js';

import {useScrollToTop} from '@react-navigation/native';

import {View, ScrollView, SafeAreaView} from 'react-native';

import LargeHeader from '../shared/Header/LargeHeader';
import Symptoms from './Symptoms/Symptoms';
import Recommendations from './Recommendations/Recommendations';
import Resources from './Resources/Resources';

import styles from './InfoScreen.styles';

export default function InfoScreen({navigation}) {
  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <LargeHeader title={t('info.title')} />
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
