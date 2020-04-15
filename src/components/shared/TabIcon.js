import React from 'react';
import {Image} from 'react-native';

const imgSyles = {
  position: 'relative',
};

export default function TabIcon({color, size, icon}) {
  return (
    <Image
      source={icon}
      style={[
        imgSyles,
        {
          width: size + 1,
          height: size + 1,
          tintColor: color,
        },
      ]}
    />
  );
}
