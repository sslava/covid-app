import React, {useCallback, memo} from 'react';

import checkboxImage from '../../assets/icons/checkmark.png';

import {Container, Left, Title, Selected} from './Country.styles';

function Country({countryName, code, selected, onSelect}) {
  const press = useCallback(() => onSelect(code), [code, onSelect]);
  return (
    <Container onPress={press} activeOpacity={0.8}>
      <Left>
        <Title>{countryName}</Title>
      </Left>
      {selected && <Selected source={checkboxImage} />}
    </Container>
  );
}

export default memo(Country);
