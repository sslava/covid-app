import React from 'react';
import {View} from 'react-native';

import {Container, Icon, Title, Desc} from './Recommendation.styles';

export default function Recommendation({recommendation}) {
  return (
    <Container>
      <Icon source={recommendation.icon} />
      <View>
        <Title>{recommendation.title}</Title>
        <Desc>{recommendation.desc}</Desc>
      </View>
    </Container>
  );
}
