import React from 'react';
import {useTheme} from 'styled-components/native';

import searchIcon from '../../../assets/icons/search.png';

import {Container, Input, Icon} from './SearchBar.styles';

export default function SearchBar({onChange, value, placeholder, focused}) {
  const theme = useTheme();
  return (
    <Container>
      <Input
        autoFocus={focused}
        placeholder={placeholder}
        placeholderTextColor={theme.secondaryTextColor}
        value={value ? value : ''}
        clearButtonMode="always"
        onChangeText={onChange}
      />
      <Icon source={searchIcon} />
    </Container>
  );
}
