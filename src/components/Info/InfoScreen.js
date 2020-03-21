import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

import Phones from './Phones/Phones';
import symptoms from '../../assets/icons/symptom_yellow.png';
import prevention from '../../assets/icons/prevent_yellow.png';
import faq from '../../assets/icons/chat_yellow.png';

import styles from './InfoScreen.styles';

function Card({onPress, icon, title, desc}) {
  return (
    <View style={styles.cardOuter}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={icon} style={styles.cardImage} />
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{desc}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function StatsScreen({navigation}) {
  return (
    <ScrollView>
      <View style={styles.topBlock}>
        <View style={styles.header}>
          <Text style={styles.title}>Prevent COVID - 19</Text>
        </View>
        <View style={styles.cards}>
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
          <Card icon={faq} title="Вопросы" desc="Data related to the disease" />
          <Card
            icon={symptoms}
            title="Countries"
            desc="Infected countries by COVID - 19"
          />
        </View>
      </View>
      <Phones />
    </ScrollView>
  );
}
