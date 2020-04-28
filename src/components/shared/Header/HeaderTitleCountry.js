import React from 'react';
import styled from 'styled-components/native';

import countryIcons from '../../common/countryIcons';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background: transparent;
  margin-right: 8px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export default function HeaderTitleCountry({code, name}) {
  const icon = countryIcons[code];
  return (
    <Container>
      {icon && <Icon source={icon} />}
      <Title>{name}</Title>
    </Container>
  );
}
