import React, {useCallback, memo} from 'react';

import checkboxImage from '../../assets/icons/checkmark.png';
import {Container, Left, Title, Selected} from './Region.styles';

function Region({name, id, selected, onSelect}) {
  const press = useCallback(() => onSelect(id), [id, onSelect]);
  return (
    <Container onPress={press} activeOpacity={0.8}>
      <Left>
        <Title>{name}</Title>
      </Left>
      {selected && <Selected source={checkboxImage} />}
    </Container>
  );
}

export default memo(Region);
