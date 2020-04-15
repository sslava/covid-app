import React from 'react';

import {Container, Img, Name} from './Symptom.styles';

export default function Symptom({symptom}) {
  return (
    <Container bg={symptom.bg}>
      <Img source={symptom.image} />
      <Name>{symptom.title}</Name>
    </Container>
  );
}
