import React from 'react';

import {View} from 'react-native';
import {Container, Header, Title} from './Subheader.styles';

export default function Subheader({
  icon,
  title,
  children,
  activeOpacity = 1,
  ...rest
}) {
  return (
    <Container>
      <Header activeOpacity={activeOpacity} {...rest}>
        {icon}
        <Title>{title}</Title>
        <View>{children}</View>
      </Header>
    </Container>
  );
}
