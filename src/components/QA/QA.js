import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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

export function QABlock({title, children}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(() => setExpanded(e => !e), []);

  return (
    <View style={styles.block}>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={styles.question}>{title}</Text>
      </TouchableOpacity>
      {expanded && <View style={styles.answer}>{children}</View>}
    </View>
  );
}
