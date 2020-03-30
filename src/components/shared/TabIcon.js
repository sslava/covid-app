import React from 'react';
import {Image} from 'react-native';

export default function TabIcon({color, size, source}) {
  return (
    <Image
      source={source}
      style={{width: size + 4, height: size + 4, tintColor: color}}
    />
  );
}
