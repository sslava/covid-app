import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Phones from './Phones/Phones';
import symptoms from '../../assets/icons/symptom_yellow.png';
import prevention from '../../assets/icons/prevent_yellow.png';
import faq from '../../assets/icons/chat_yellow.png';

import Card, {CardContainer} from './Card';

import styles from './InfoScreen.styles';

export default function StatsScreen({navigation}) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <View style={styles.header}>
            <Text style={styles.title}>Prevent COVID - 19</Text>
          </View>
          <CardContainer>
            <Card
              icon={symptoms}
              title="Симптомы"
              desc="Signs identify the risk of infection"
            />
            <Card
              icon={prevention}
              title="Защититься?"
              desc="Меры предосторожностиы"
            />
            <Card
              icon={faq}
              title="Вопросы"
              desc="Data related to the disease"
              onPress={() => navigation.navigate('Faq')}
            />
            <Card
              icon={symptoms}
              title="Countries"
              desc="Infected countries by COVID - 19"
            />
          </CardContainer>
        </View>
        <Phones />
      </View>
    </ScrollView>
  );
}
