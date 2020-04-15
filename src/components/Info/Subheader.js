import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View`
  padding-horizontal: 20px;
  padding-bottom: 15px;
`;

const Title = styled.Text`
  font-family: 'Ubuntu';
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
`;

export default function Subheader({children}) {
  return (
    <Header>
      <Title>{children}</Title>
    </Header>
  );
}
