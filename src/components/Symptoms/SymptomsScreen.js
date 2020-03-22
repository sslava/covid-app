import React from 'react';

import {ScrollView, Text} from 'react-native';

import {QAContainer, QABlock, AnswerText} from '../shared/QA/QA';
import NavStatusBar from '../shared/NavStatusBar';

import tempIcon from '../../assets/icons/thermometer_yellow.png';
import lungsIcon from '../../assets/icons/lungs_yellow.png';
import coughtingIcon from '../../assets/icons/coughting_yellow.png';

import styles from './SymptomsScreen.styles';

export default function SymptomsScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}>
      <NavStatusBar barStyle="light-content" />
      <QAContainer>
        <QABlock title="Высокая температура тела" icon={tempIcon}>
          <AnswerText>
            Коронавирусы составляют обширное семейство вирусов с доказанными
            болезнетворными свойствами по отношению к человеку или животным.
          </AnswerText>
        </QABlock>
        <QABlock title="Кашель" icon={coughtingIcon}>
          <AnswerText>
            COVID‑19 – инфекционное заболевание, вызванное последним из недавно
            открытых коронавирусов. До вспышки инфекции в Ухане, Китай, в
            декабре 2019 г. о новом вирусе и заболевании ничего не было
            известно.
          </AnswerText>
        </QABlock>
        <QABlock title="Одышка" icon={lungsIcon}>
          <AnswerText>
            COVID‑19 – инфекционное заболевание, вызванное последним из недавно
            открытых коронавирусов. До вспышки инфекции в Ухане, Китай, в
            декабре 2019 г. о новом вирусе и заболевании ничего не было
            известно.
          </AnswerText>
        </QABlock>
        <QABlock
          title="Ощущения сдавленности в грудной клетке"
          icon={lungsIcon}>
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
