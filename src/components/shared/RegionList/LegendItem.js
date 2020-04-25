import React from 'react';

import {
  Left,
  Right,
  PrimaryNumber,
  Container,
  Color,
  Title,
  Today,
} from './LegendItem.styles';

export default function LegendItem({
  color,
  title,
  number,
  today,
  large,
  skipToday,
}) {
  return (
    <Container>
      <Left>
        {color && <Color color={color} />}
        <Title>{title}</Title>
      </Left>
      <Right skipToday={skipToday}>
        <PrimaryNumber value={number} large={large} />
        {!skipToday && <Today num={today} />}
      </Right>
    </Container>
  );
}
