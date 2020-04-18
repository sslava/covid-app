import React from 'react';

import {Container, Bar} from './StatsBar.styles';

export default function StatsBar({style, items, height = 20}) {
  return (
    <Container style={style}>
      {items.map(({color, fraction}) => (
        <Bar key={color} height={height} fraction={fraction} color={color} />
      ))}
    </Container>
  );
}
