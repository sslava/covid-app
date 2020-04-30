import React from 'react';

import {Text, Rect} from 'react-native-svg';

export const Bar = Rect;

export const BarLabel = ({color, x, children, fontSize = 13}) => (
  <Text
    fill={color}
    fontSize={fontSize}
    fontWeight="600"
    y={fontSize}
    x={x}
    textAnchor="middle">
    {children}
  </Text>
);
