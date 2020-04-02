import React from 'react';
import {Image} from 'react-native';

const imgSyles = {
  position: 'relative',
  top: 2,
};

export default function TabIcon({focused, size, icon}) {
  const tintColor = focused ? '#087ED9' : '#A0A2AF';
  return (
    <Image
      source={icon}
      style={[
        imgSyles,
        {
          width: size + 1,
          height: size + 1,
          tintColor,
        },
      ]}
    />
  );
}
