import React from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {View, Text, ScrollView, StatusBar} from 'react-native';

import Phones from './Phones/Phones';

import coughting from '../../assets/icons/coughting_yellow.png';
import thermometer from '../../assets/icons/thermometer_yellow.png';
import prevention from '../../assets/icons/prevent_yellow.png';
import faq from '../../assets/icons/chat_yellow.png';

import Card, {CardContainer} from './Card';

import styles from './InfoScreen.styles';

export default function InfoScreen({navigation}) {
  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <ScrollView style={styles.scroll}>
      <StatusBar barStyle="light-content" animated />
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <View style={styles.header}>
            <Text style={styles.title}>Prevent COVID - 19</Text>
          </View>
          <CardContainer>
            <Card
              icon={thermometer}
              title="Симптомы"
              desc="Самые частые симптомы"
              onPress={() => navigation.navigate('Symptoms')}
            />
            <Card
              icon={prevention}
              title="Профилактика"
              desc="Как защититься"
              onPress={() => navigation.navigate('Prevent')}
            />
            <Card
              icon={coughting}
              title="Как передается"
              desc="Как вирус распространяется?"
              onPress={() => navigation.navigate('Spread')}
            />
            <Card
              icon={faq}
              title="Вопросы"
              desc="Что такое коронавирус?"
              onPress={() => navigation.navigate('WhoFaq')}
            />
          </CardContainer>
        </View>
        <Phones />
      </View>
    </ScrollView>
  );
}
