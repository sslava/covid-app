import React from 'react';

import {Container, Growing, Left, Right} from './SlidingBlocks.styles';

export default function SlidingBlocks({left, right, center, fraction}) {
  return (
    <Container>
      <Left>
        <Growing fraction={fraction}>{left}</Growing>
        {center}
      </Left>
      <Right>{right}</Right>
    </Container>
  );
}
