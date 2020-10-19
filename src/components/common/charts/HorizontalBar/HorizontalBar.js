import React from 'react';

import {Container, Bar} from './HorizontalBar.styles';

export default function HorizontalBar({style, items, height = 20}) {
  return (
    <Container style={style} height={height}>
      {items.map(({color, fraction}) => (
        <Bar key={color} height={height} fraction={fraction} color={color} />
      ))}
    </Container>
  );
}
