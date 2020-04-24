import React from 'react';

import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {darkTheme, lightTheme} from './themes';

export default function AppearanceTheme({children}) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
