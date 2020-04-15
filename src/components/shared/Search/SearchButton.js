import React from 'react';

import searchIcon from '../../../assets/icons/search.png';

import {Button, Icon, Placeholder, InputContainer} from './SearchBar.styles';

export default function SearchButton({placeholder, onPress}) {
  return (
    <Button onPress={onPress} activeOpacity={0.5}>
      <InputContainer>
        <Placeholder>{placeholder}</Placeholder>
      </InputContainer>
      <Icon source={searchIcon} />
    </Button>
  );
}
