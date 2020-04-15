import React from 'react';

import {Container, Title} from './LargeHeader.styles';

export default function LargeHeader({title, style}) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
