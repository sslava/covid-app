import React from 'react';

import {Text, ScrollView} from 'react-native';

import {
  QAContainer,
  QABlock,
  AnswerText,
  SubQuestion,
  Ul,
  Li,
} from '../shared/QA/QA';
import NavStatusBar from '../shared/NavStatusBar';

import styles from './SymptomsScreen.styles';

export default function SymptomsScreen() {
  return (
    <ScrollView style={styles.scroll}>
      <NavStatusBar barStyle="light-content" />
      <QAContainer>
        <QABlock title="Что такое коронавирус?">
          <AnswerText>
            Коронавирусы составляют обширное семейство вирусов с доказанными
            болезнетворными свойствами по отношению к человеку или животным.
          </AnswerText>
        </QABlock>
        <QABlock title="Что такое COVID-19?">
          <AnswerText>
            COVID‑19 – инфекционное заболевание, вызванное последним из недавно
            открытых коронавирусов. До вспышки инфекции в Ухане, Китай, в
            декабре 2019 г. о новом вирусе и заболевании ничего не было
            известно.
          </AnswerText>
        </QABlock>
      </QAContainer>
    </ScrollView>
  );
}
