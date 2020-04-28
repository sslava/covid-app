import React from 'react';
import {Animated} from 'react-native';

import {Text, Rect} from 'react-native-svg';

export const Bar = Rect;

export const AnimatedBar = Animated.createAnimatedComponent(Rect);

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
