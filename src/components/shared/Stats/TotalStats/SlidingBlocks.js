import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Growing = styled.View`
  margin-right: 5px;
  flex-grow: ${(p) => p.fraction};
`;

const Left = styled.View`
  flex-direction: row;
  flex-grow: 1;
  padding-right: 3px;
`;

export const Right = styled.View``;

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
