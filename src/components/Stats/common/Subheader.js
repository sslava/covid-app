import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const Container = styled.View`
  flex-direction: row;
`;

const Header = styled.TouchableOpacity`
  padding-horizontal: 20px;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
  color: ${(p) => p.theme.primaryTextColor};
`;

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
