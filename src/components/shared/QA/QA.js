import React, {useState, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import downIcon from '../../../assets/icons/dropdown_white.png';

import styles from './QA.styles';

export function QAContainer({children}) {
  return <View style={styles.container}>{children}</View>;
}

export function AnswerText({children}) {
  return <Text style={styles.answerText}>{children}</Text>;
}

export function Ul({children}) {
  return <View style={styles.ul}>{children}</View>;
}

export function Li({children}) {
  return <View style={styles.li}>{children}</View>;
}

export function SubQuestion({children, title}) {
  return (
    <View style={styles.subquestion}>
      <Text style={styles.subTitle}>{title}</Text>
      <View style={styles.subAnswer}>{children}</View>
    </View>
  );
}

export function InfoBlock({title, children, icon}) {
  return (
    <View style={styles.block}>
      <View style={styles.button}>
        {icon && <Image source={icon} style={styles.questionIcon} />}
        <Text style={styles.question}>{title}</Text>
      </View>
    </View>
  );
}

export function QABlock({title, children, icon}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded(e => !e), []);

  return (
    <View style={styles.block}>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        {icon && <Image source={icon} style={styles.questionIcon} />}
        <Text style={styles.question}>{title}</Text>
        <Image source={downIcon} style={styles.arrowDown} />
      </TouchableOpacity>
      {expanded && <View style={styles.answer}>{children}</View>}
    </View>
  );
}
