import React from 'react';

import {ScrollView, Text} from 'react-native';

import {QAContainer, QABlock, AnswerText, Ul, Li} from '../shared/QA/QA';
import NavStatusBar from '../shared/NavStatusBar';

import styles from './SymptomsScreen.styles';

export default function SymptomsScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}>
      <NavStatusBar barStyle="light-content" />
      <QAContainer>
        <QABlock title="высокая температура тела">
          <AnswerText>
            Коронавирусы составляют обширное семейство вирусов с доказанными
            болезнетворными свойствами по отношению к человеку или животным.
          </AnswerText>
        </QABlock>
        <QABlock title="кашель (сухой или с небольшим количеством мокроты)">
          <AnswerText>
            COVID‑19 – инфекционное заболевание, вызванное последним из недавно
            открытых коронавирусов. До вспышки инфекции в Ухане, Китай, в
            декабре 2019 г. о новом вирусе и заболевании ничего не было
            известно.
          </AnswerText>
        </QABlock>
        <QABlock title="одышка">
          <AnswerText>
            COVID‑19 – инфекционное заболевание, вызванное последним из недавно
            открытых коронавирусов. До вспышки инфекции в Ухане, Китай, в
            декабре 2019 г. о новом вирусе и заболевании ничего не было
            известно.
          </AnswerText>
        </QABlock>
        <QABlock title="ощущения сдавленности в грудной клетке">
          <AnswerText>
            COVID‑19 – инфекционное заболевание, вызванное последним из недавно
            открытых коронавирусов. До вспышки инфекции в Ухане, Китай, в
            декабре 2019 г. о новом вирусе и заболевании ничего не было
            известно.
          </AnswerText>
        </QABlock>
      </QAContainer>
      <Text>123213123</Text>
    </ScrollView>
  );
}
