import React from 'react';
import {Image} from 'react-native';

export default function TabIcon({focused, size, icon}) {
  const tintColor = focused ? '#087ED9' : '#A0A2AF';
  return (
    <Image
      source={icon}
      style={{width: size + 2, height: size + 2, tintColor}}
    />
  );
}
