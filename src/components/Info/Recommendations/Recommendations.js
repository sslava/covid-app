import React from 'react';
import {View, Text} from 'react-native';

import Recommendation from './Recommendation';

import styles from './Recommendation.styles';

const recommendations = [
  {
    title: 'Постарайтесь остаться дома',
    desc: 'Карантин — способ остановить распространение',
  },
  {
    title: 'Ограничьте личные контакты с людьми',
    desc: '',
  },
  {
    title: 'Соблюдайте дистанцию',
    desc: '',
  },
  {
    title: 'Ещё чаще мойте руки',
    desc: '',
  },
  {
    title: 'Используйте средства защиты',
    desc: '',
  },
  {
    title: 'Сохраняйте спокойствие',
    desc: '',
  },
  {
    title: 'Оставайтесь на связи с близкими',
    desc: '',
  },
];

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <View slyle={styles.header}>
        <Text slyle={styles.title}>Рекоммендации</Text>
      </View>
      <View slyle={styles.list}>
        {recommendations.map((r, i) => (
          <Recommendation key={i} recommendation={r} />
        ))}
      </View>
    </View>
  );
}
