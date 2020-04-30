import React from 'react';
import styled from 'styled-components/native';

import countryIcons from '../common/countryIcons';
import downIcon from '../../assets/icons/dropdown.png';

const Container = styled.TouchableOpacity`
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

const Down = styled.Image`
  margin-left: 5px;
  position: relative;
  top: 2px;
  width: 10px;
  height: 8px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${(p) => p.theme.primaryTextColor};
`;

export default function HeaderTitleCountry({code, name, onPress}) {
  const icon = countryIcons[code];
  return (
    <Container onPress={onPress}>
      {icon && <Icon source={icon} />}
      <Title>{name}</Title>
      <Down source={downIcon} />
    </Container>
  );
}
