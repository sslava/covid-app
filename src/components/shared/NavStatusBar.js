// @flow
import React from 'react';
import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  barStyle: 'default' | 'light-content' | 'dark-content',
};

export default function NavStatusBar({barStyle}: Props) {
  useFocusEffect(() => {
    StatusBar.setBarStyle(barStyle);
  }, [barStyle]);

  return <StatusBar barStyle={barStyle} animated />;
}
